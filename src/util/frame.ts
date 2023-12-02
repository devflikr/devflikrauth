import { v4 as uuid } from 'uuid';

export {
    uuid,
};

function frameIdGenerator() {
    let frame = uuid();

    frame = frame.replace(/-/g, "_");

    if (/^\d/.test(frame)) {
        frame = "A" + frame.slice(1);
    }

    return frame;
}

export default frameIdGenerator;
