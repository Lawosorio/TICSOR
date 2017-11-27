var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var StringsProvider = /** @class */ (function () {
    function StringsProvider() {
        this.error_connection = "No se puede conectar con el servidor";
        this.modal_error_connection = "No se pudo conectar con el servidor, verifica la conexión con internet";
    }
    StringsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], StringsProvider);
    return StringsProvider;
}());
export { StringsProvider };
//# sourceMappingURL=strings-provider.js.map