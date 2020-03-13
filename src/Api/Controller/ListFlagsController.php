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

//    public $sort = ['dismissed_at' => 'desc'];
//
//    public $sortFields = ['dismissedAt'];

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

//        $sort = $this->extractSort($request);

        $flag = Flag::whereVisibleTo($actor);
        $flag->with($this->extractInclude($request));
        if ($onlyDismissed = Arr::get($request->getQueryParams(), 'dismissed', false)) {
            $flag->whereNotNull('flags.dismissed_at');
            $flag->orderBy('flags.dismissed_at', 'desc');
        } else {
            $flag->whereNull('flags.dismissed_at');
            $flag->groupBy('post_id');
            $flag->latest('flags.created_at');
        }

//        foreach ($sort as $field => $order) {
//            $flag->orderBy(snake_case($field), $order);
//        }

        return $flag->get();
    }
}
