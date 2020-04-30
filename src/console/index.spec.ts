const { describe, it, beforeEach, afterEach } = intern.getInterface("bdd");
const { assert } = intern.getPlugin("chai");
import { stub, SinonStub } from "sinon";

import { log } from "./index";

let consoleStub: SinonStub;

describe("index", () => {
	beforeEach(() => {
		consoleStub = stub(console, "log");
	});

	afterEach(() => {
		consoleStub.restore();
	});

	it("log", () => {
		log("a");
		assert.isTrue(consoleStub.calledOnce);
		log("b");
		assert.isTrue(consoleStub.calledTwice);
	});
});
