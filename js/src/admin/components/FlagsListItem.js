import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import fullTime from 'flarum/helpers/fullTime';

export default class FlagsListItem extends Component {

    view() {
        const { flag } = this.props;
        console.log(flag);
        const user = flag.data.user();
        const formattedDate = fullTime(flag.data.attributes.createdAt)
        return (

            <tr key={flag.data.id}>
                <td>{formattedDate}</td>
                <td>{user}</td>
                <td>{flag.data.attributes.reason}</td>
                <td>{flag.data.attributes.reasonDetail}</td>
                <td></td>
            </tr>

        );
    }
}
