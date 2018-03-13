"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var disques_service_1 = require("./disques.service");
describe('DisquesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [disques_service_1.DisquesService]
        });
    });
    it('should be created', testing_1.inject([disques_service_1.DisquesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=disques.service.spec.js.map