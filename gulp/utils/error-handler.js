import util     from 'gulp-util';
import notify   from 'gulp-notify';

export default function(error) {

    util.beep();

    notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>'
    })(error);

    this.emit('end');

}
