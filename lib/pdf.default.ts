import { join } from 'path';
import { tmpdir } from 'os';
import { randomUUID } from 'crypto';

export const defaultCreateOptions = () => ({
    filename: join(tmpdir(), `html-pdf-${process.pid}-${randomUUID()}.pdf`),
});
