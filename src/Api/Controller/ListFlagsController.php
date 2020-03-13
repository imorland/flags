<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Flags\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Flags\Api\Serializer\FlagSerializer;
use Flarum\Flags\Flag;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListFlagsController extends AbstractListController
{
    use AssertPermissionTrait;

    /**
     * {@inheritdoc}
     */
    public $serializer = FlagSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = [
        'user',
        'post',
        'post.user',
        'post.discussion'
    ];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $this->assertRegistered($actor);

        $actor->read_flags_at = time();
        $actor->save();

        $onlyDismissed = Arr::get($request->getQueryParams(), 'dismissed', false);

        return Flag::whereVisibleTo($actor)
            ->with($this->extractInclude($request))
            ->latest('flags.created_at')
            ->where(function ($query) use ($onlyDismissed) {
                if ($onlyDismissed) {
                    return $query->whereNotNull('flags.dismissed_at');
                }

                return $query->whereNull('flags.dismissed_at');
            })
            ->groupBy('post_id')
            ->get();
    }
}
