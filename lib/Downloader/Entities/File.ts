import {parse} from "url";
import {basename} from "path";

export class File {
	constructor(public url: string) {
	}

	get fileName(): string {
		return basename(parse(this.url).pathname);
	}
}
