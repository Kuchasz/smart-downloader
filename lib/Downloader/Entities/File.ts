import {parse} from "url";
import {basename} from "path";

export class File {

	public length: number = undefined;

	constructor(public url: string) {
	}

	get fileName(): string {
		return basename(parse(this.url).pathname);
	}
}
