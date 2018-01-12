webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 200px 1fr;\r\n        grid-template-columns: 200px 1fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"grid\">\r\n    <div class=\"navbar\">\r\n        <app-navbar></app-navbar>\r\n    </div>\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>\r\n        <app-footer></app-footer>  \r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_compartidos_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/compartidos/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_origins_origins_component__ = __webpack_require__("../../../../../src/app/components/origins/origins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_compartidos_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/compartidos/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Routes







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_compartidos_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_origins_origins_component__["a" /* OriginsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_compartidos_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* APP_ROUTING */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_origins_origins_component__ = __webpack_require__("../../../../../src/app/components/origins/origins.component.ts");




var app_routes = [
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'origenes', component: __WEBPACK_IMPORTED_MODULE_3__components_origins_origins_component__["a" /* OriginsComponent */] },
    { path: 'contacto', component: __WEBPACK_IMPORTED_MODULE_2__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(app_routes);


/***/ }),

/***/ "../../../../../src/app/components/compartidos/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\r\n    width: 100%;\r\n    height: 200px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.redes{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    width: 30%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compartidos/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <p class=\"medium\" >\n    Copyright &copy; Quick & Fit 2018. Todos los derechos reservados \n  </p>\n  <div class=\"redes\">\n    <div class=\"redes-item\">\n      <img src=\"./assets/img/youtube.svg\" alt=\"\">\n    </div>\n    <div class=\"redes-item\">\n      <img src=\"./assets/img/insta.svg\" alt=\"\">\n    </div>\n    <div class=\"redes-item\">\n      <img src=\"./assets/img/face.svg\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"medium\">\n    Términos y condiciones | Políticas de privacidad\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/compartidos/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/compartidos/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compartidos/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/compartidos/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-nav-container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    position: fixed;\r\n    width: 10%;\r\n    height: 100%;\r\n    top: 0;\r\n    min-width: 200px;\r\n    grid-template: 8% 10% 10% 30% 1fr/1fr 4fr 1fr;\r\n    \r\n}\r\n\r\n.logo-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-row: 2;\r\n        grid-row-start: 2;\r\n    display: flex;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.lenguajes-section{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-row: 3;\r\n        grid-row-start: 3;\r\n    grid-template: 1fr/1fr 1fr 1fr;\r\n}\r\n\r\n.internal-menu{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-row: 4;\r\n        grid-row-start: 4;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.menu-component{\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compartidos/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-nav-container back-color-gray1\">\r\n  <img src=\"../../../../assets/img/Logo_menu.png\" class=\"logo-container\">\r\n  <div class=\"lenguajes-section bold text-color-gray5\">\r\n    <p class=\"menu-component\" routerLinkActive=\"text-color-blue\" style=\"text-align: end\">EN</p>\r\n    <p style=\"text-align: center\">|</p>\r\n    <p class=\"menu-component\" routerLinkActive=\"text-color-blue\" style=\"text-align: start\">ES</p>\r\n  </div>\r\n\r\n  <div class=\"internal-menu book text-color-gray5\">\r\n    <p [routerLink]=\"['inicio']\" class=\"menu-component\" routerLinkActive=\"text-color-blue bold\">INICIO</p>\r\n    <P [routerLink]=\"['origenes']\" class=\"menu-component\" routerLinkActive=\"text-color-blue bold\">ORÍGENES</P>\r\n    <P [routerLink]=\"['menu']\" class=\"menu-component\" routerLinkActive=\"text-color-blue bold\">MENÚ</P>\r\n    <p [routerLink]=\"['contacto']\" class=\"menu-component\" routerLinkActive=\"text-color-blue bold\">CONTACTO</p>\r\n  </div>  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/compartidos/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/compartidos/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/compartidos/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 530px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 150px;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\ntop30{\r\n    margin-top: 60px;\r\n}\r\n\r\n.header-img{\r\n    width: 50%;   \r\n}\r\n\r\n.header-img img{\r\n    width: 90%;\r\n}\r\n\r\n\r\n.header-info{\r\n    width: 40%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-size: 1.5rem;\r\n}\r\np.bold{\r\n    padding-bottom: 10px;\r\n    margin: 0;\r\n}\r\n\r\n.line{\r\n    margin-right: 50px;\r\n    width: 5px;\r\n    height: 120px;\r\n    background-color: #414042;\r\n    border-radius: 30px;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.form{\r\n    margin-top: 150px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n   -webkit-box-align: center;\r\n       -ms-flex-align: center;\r\n           align-items: center;\r\n    \r\n}\r\n\r\n.button-container{\r\n    width: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.send-container{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.contact-form{\r\n    width: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n\r\n/* Diseño de botones */\r\n.button{\r\n    text-transform: uppercase;\r\n    padding: 10px 50px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.muted{\r\n    border: 1px solid #bcbec0;\r\n    color: #bcbec0;\r\n    background-color: #fff;\r\n}\r\n\r\n.send{\r\n    border: 1px solid #f89a1c;\r\n    color: #fff;\r\n    background-color: #f89a1c;\r\n}\r\n\r\n.select{\r\n    border: 1px solid #BFE231;\r\n    color: #fff;\r\n    background-color: #BFE231;\r\n}\r\n\r\n.section-two{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row;\r\n            flex-flow: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n\r\n.input-field{\r\n    width: 100%;\r\n}\r\n\r\n.short{\r\n    width: 45%;\r\n}\r\n\r\n/* label focus color */\r\n.input-field input[type=text]:focus + label {\r\n    color: #BFE231;\r\n  }\r\n/* label underline focus color */\r\n.input-field input[type=text]:focus {\r\n    border-bottom: 1px solid #BFE231;\r\n    box-shadow: 0 1px 0 0 #BFE231;\r\n  }\r\n\r\n  /* label focus color */\r\n.input-field textarea:focus + label {\r\n    color: #BFE231;\r\n  }\r\n/* label underline focus color */\r\n.input-field textarea:focus {\r\n    border-bottom: 1px solid #BFE231;\r\n    box-shadow: 0 1px 0 0 #BFE231;\r\n  }\r\n\r\n  select{\r\n      color:#bcbec0;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <!-- Imagen del header -->\n  <div class=\"header-img\">\n    <img src=\"./assets/img/zanahorias.png\" alt=\"\">\n  </div>\n  <div class=\"header-info\">\n    <div class=\"line\"></div>\n    <div class=\"content\">\n      <p class=\"bold\">Washignton Street #456</p>\n      <p class=\"bold\">T. 33 44 55 66 77</p>\n      <p class=\"bold\">Guadalajara, Jalisco</p>\n    </div>\n  </div>\n</header>\n<section class=\"form\">\n  <div class=\"button-container\">\n    <a (click)=\"tipoCliente(1)\" [ngClass]=\"clientBtn\" class=\"button bold\"> soy persona </a>\n    <a (click)=\"tipoCliente(2)\" [ngClass]=\"busBtn\" class=\"button bold\"> soy empresa </a>\n  </div>\n  <br><br>\n  <div  class=\"contact-form\">\n    <div class=\"input-field \">\n        <input id=\"last_name\" type=\"text\" class=\"validate\">\n        <label for=\"last_name\">Nombre</label>\n      </div>\n      <div class=\"input-field \">\n        <input id=\"last_name\" type=\"text\" class=\"validate\">\n        <label for=\"last_name\">Ocupación</label>\n      </div>\n      <div class=\"section-two\">\n        <div class=\"short\">\n          <div class=\"input-field \">\n            <input id=\"last_name\" type=\"text\" class=\"validate\">\n            <label for=\"last_name\">Teléfono</label>\n          </div>\n        </div>\n        <div class=\"short\">\n          <div class=\"input-field \">\n              <input id=\"last_name\" type=\"text\" class=\"validate\">\n              <label for=\"last_name\">Correo electrónico</label>\n            </div>\n        </div>\n      </div>\n      <!-- Select Empresa -->\n      <select class=\"medium\" *ngIf=\"!isClient\" class=\"browser-default\">\n        <option value=\"\" disabled selected>Asunto</option>\n        <option value=\"1\">Me gustaría ser proveedor de carne</option>\n        <option value=\"2\">Me gustaría ser proveedor de pollo</option>\n        <option value=\"3\">Me gustaría ser proveedor de pescado</option>\n        <option value=\"4\">Me gustaría ser proveedor de fruta y verdura</option>\n        <option value=\"5\">Me gustaría hacer una alianza</option>\n        <option value=\"6\">Otro</option>\n      </select>\n      <!-- Select Persona -->\n      <select class=\"medium\" *ngIf=\"isClient\" class=\"browser-default\">\n        <option value=\"\" disabled selected>Asunto</option>\n        <option value=\"1\">Tengo una queja</option>\n        <option value=\"2\">Tengo una sugerencia</option>\n        <option value=\"3\">Me interesa una franquicia</option>\n        <option value=\"4\">Me gustaría ser proveedor de mostrador</option>\n        <option value=\"5\">Otro</option>\n      </select>\n\n      <div class=\"input-field\">\n        <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\n        <label for=\"textarea1\">Textarea</label>\n      </div>\n\n      <div class=\"send-container\">\n          <a class=\"button send bold\"> Enviar </a>\n        </div>\n      \n  </div>\n\n  \n\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.clientBtn = { select: true, muted: false };
        this.busBtn = { select: false, muted: true };
        this.isClient = true;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.tipoCliente = function (tipo) {
        if (tipo == 1) {
            this.clientBtn = { select: true, muted: false };
            this.busBtn = { select: false, muted: true };
            this.isClient = true;
        }
        else {
            this.clientBtn = { select: false, muted: true };
            this.busBtn = { select: true, muted: false };
            this.isClient = false;
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-header{\r\n    width: 100%;\r\n}\r\n\r\n.estilo-titulos{\r\n    font-size: 5rem;\r\n    margin: -10px;\r\n}\r\n.estilo-sub-titulos{\r\n    font-size: 3rem;\r\n    margin: 0px;\r\n}\r\n.naranjazo{\r\n    position: absolute;\r\n    right: 0;\r\n    top:85%;\r\n    width: 16%;\r\n    max-width: 300px;\r\n}\r\n\r\n/* Grid principal */\r\n.central-info{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr 1fr auto auto auto /1fr 8fr ;\r\n}\r\n\r\n.mainInfo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr 1fr/1fr;\r\n    -ms-grid-row: 2;\r\n        grid-row-start: 2;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n}\r\n\r\n.central-info-detail{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: .3fr  1fr /1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    -ms-grid-row: 3;\r\n        grid-row-start: 3;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n}\r\n\r\n.info-items-central-info{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.central-info-position-a{\r\n    grid-area: 1/1/1/7;\r\n    /* margin: 0px; */\r\n}\r\n.central-info-position-b{\r\n    grid-area:2/1/2/7;\r\n    margin: 0px;\r\n}\r\n\r\n.frap_naranja_img{\r\n    grid-area: 2/1/4/8;\r\n    width: 100%;\r\n}\r\n\r\n/* Arma tu platillo */\r\n.contenedor-arma-platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr 3fr/1fr;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    -ms-grid-row: 4;\r\n        grid-row-start: 4;\r\n}\r\n.titulo_arma_platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr/1fr 3fr 1fr;\r\n}\r\n.titulo_arma_platillo_texto{\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;   \r\n}\r\n.titulo_arma_platillo_borde_inferior{\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    border-bottom: 2px solid #bcbec0;\r\n}\r\n\r\n.contenido_arma_platillo{\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    -ms-grid-row: 2;\r\n        grid-row-start: 2;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr;\r\n}\r\n\r\n.imagen_arma_platillo{\r\n    margin-top: 25px;\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    width: 100%;\r\n    visibility: hidden;\r\n}\r\n.contenidos_info_arma_platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr/5% 1fr 1fr 1fr 1fr;\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n}\r\n\r\n.first_menu_item_arma_platillo{\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n}\r\n\r\n.contenido_item_instruction_arma_platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 2fr 1fr 2fr/1fr;\r\n    margin-top: 25px;\r\n    padding: 10px;\r\n}\r\n\r\n.contenido_item_instruction_arma_platillo_imagen{\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    width: 60%;\r\n    display: block;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n}\r\n\r\n.contenido_item_instruccion_arma_platillo_main_text{\r\n    font-size: 1.3rem;\r\n    margin: auto;\r\n}\r\n\r\n.contenido_item_instruccion_arma_platillo_sub_text{\r\n    font-size: 1rem;\r\n    margin: auto;\r\n}\r\n\r\n\r\n/* Realiza tu platillo */\r\n.contenedor_realiza_platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr 4fr 1fr/1fr 10fr;\r\n    -ms-grid-row: 5;\r\n        grid-row-start: 5;\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    grid-area: 5/1/5/3;\r\n    width: 100%;\r\n    /* height: 200px; */\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.fondo_contenedor_realiza_platillo{\r\n    grid-area: 1/1/3/3;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.titulo_realiza_platillo_container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template: 1fr/1fr 4fr;\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    margin: 0;\r\n}\r\n\r\n.titulo_realiza_platillo_texto{\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    /* margin: auto; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n.titulo_realiza_platillo_borde_inf{\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n    border-bottom: 2px solid #fbfbfb;\r\n    width: 20%;\r\n    min-width: 200px;\r\n}\r\n.contenedor_interno_realiza_platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-area: 2/2/4/2;\r\n    grid-template: 1fr/1fr 1fr;\r\n}\r\n.imagen_contenedor_realiza_platillo{\r\n    width: 100%;\r\n    margin: auto;\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 2;\r\n        grid-column-start: 2;\r\n}\r\n\r\n/* mini formulario realiza platillo */\r\n\r\n.formulario_container_realiza_platillo{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-row: 1;\r\n        grid-row-start: 1;\r\n    -ms-grid-column: 1;\r\n        grid-column-start: 1;\r\n    grid-template: 1fr 1fr 1fr 1fr 2fr/ 1fr ;\r\n}\r\n\r\n.texto_principal_formulario_realiza_platillo{\r\n    font-size: 3rem;\r\n    margin: 15px;\r\n}\r\n\r\n.texto_secundario_formulario_realiza_platillo{\r\n    font-size: 1.5rem;\r\n    margin: 15px;\r\n}\r\n\r\n.first_item_form_realiza_platillo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n.contenedor_botones{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row;\r\n            flex-flow: row;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.boton_base{\r\n    width: 35%;\r\n    min-width: 170px;\r\n    border-radius: 10px;\r\n    border: 1px solid #fbfbfb;\r\n    padding: 14px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.boton_relleno{\r\n    background-color: #fbfbfb;\r\n    color: #414042;\r\n}\r\n\r\n.boton_vacio{\r\n    color: #fbfbfb;\r\n}\r\n\r\n/* Se activa cuando pasa de 1366px */\r\n@media(min-width: 1366px){\r\n    .frap_naranja_img{\r\n        grid-area: 1/4/4/8;\r\n        width: 70%;\r\n    }\r\n\r\n    .central-info-position-a{\r\n        grid-area: 1/1/1/5;\r\n        /* margin: 0px; */\r\n    }\r\n    .central-info-position-b{\r\n        grid-area:2/1/2/5;\r\n        margin: 0px;\r\n    }\r\n    .imagen_arma_platillo{\r\n        margin-top: 25px;\r\n        -ms-grid-column: 1;\r\n            grid-column-start: 1;\r\n        -ms-grid-row: 1;\r\n            grid-row-start: 1;\r\n        width: 100%;\r\n        visibility: visible;\r\n    }\r\n    .contenido_arma_platillo{\r\n        -ms-grid-column: 1;\r\n            grid-column-start: 1;\r\n        -ms-grid-row: 2;\r\n            grid-row-start: 2;\r\n        display: -ms-grid;\r\n        display: grid;\r\n        grid-template: 1fr/ 1fr 3fr;\r\n    }\r\n    .contenidos_info_arma_platillo{\r\n        display: -ms-grid;\r\n        display: grid;\r\n        grid-template: 1fr/5% 1fr 1fr 1fr 5% 1fr;\r\n        -ms-grid-row: 1;\r\n            grid-row-start: 1;\r\n        -ms-grid-column: 2;\r\n            grid-column-start: 2;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*\r\n\r\nTest\r\n.image-a-central-info{\r\n    grid-area: 3/4/3/7;\r\n    width: 80%;\r\n}\r\n.image-b-central-info{\r\n    grid-area: 1/6/4/8;\r\n    width: 70%;\r\n}\r\n\r\n\r\n\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- Header -->\r\n  <img class=\"main-header\" src=\"../../../../assets/img/foto_header.jpg\" alt=\"\">\r\n  <!-- Naranjazo -->\r\n  <img class=\"naranjazo\" src=\"../../../../assets/img/Naranja_edit.png\">\r\n\r\n  <!-- Info -->\r\n  <div class=\"central-info\">\r\n    <div class=\"mainInfo\">\r\n      <P class=\"text-color-gray2 estilo-titulos\">El lugar perfecto para comer</P>\r\n      <p style=\"transform: translate(0px, -23px);\" class=\"text-color-gray1 bold estilo-titulos\">de forma saludable</p>\r\n    </div>\r\n    <!-- Info central 1 -->\r\n    <div class=\"central-info-detail text-color-gray2\">\r\n      <p class=\"info-items-central-info central-info-position-a\">Quick & Fit está en búsqueda de una solución para aquellos que desean\r\n        comer saludable, rico y economico. Pueden encontrarse bajo algún régimen \r\n        alimenticio complementario a su rutina física o entrenamiento.\r\n        <br><br>\r\n        El equipo de Quick & Fit está compuesto por expertos en el mundo de la \r\n        nutrición y la gastronomía\r\n      </p>\r\n      <!-- <img class=\"image-a-central-info\" src=\"../../../../assets/img/frappe.png\">\r\n      <img class=\"image-b-central-info\" src=\"../../../../assets/img/naranja_completa.png\"> -->\r\n      <img class=\"frap_naranja_img\" src=\"../../../../assets/img/frappe_naranja.png\">\r\n    </div>\r\n\r\n    <!-- Info central 2 -->\r\n    <div class=\"contenedor-arma-platillo\">\r\n      <!-- Titulo info central 2 -->\r\n      <div class=\"titulo_arma_platillo\">\r\n        <div class=\"titulo_arma_platillo_texto\">\r\n            <p style=\"transform: translate(0px, 23px)\" class=\"text-color-gray2 estilo-sub-titulos\">ARMA TU</p>\r\n            <p class=\"text-color-gray1 bold estilo-titulos\">PLATILLO</p>\r\n        </div>\r\n        <p class=\"titulo_arma_platillo_borde_inferior\">\r\n        </p>\r\n      </div>\r\n      <div class=\"contenido_arma_platillo\">\r\n        <img src=\"../../../../assets/img/berries.png\" class=\"imagen_arma_platillo\">\r\n        <div class=\"contenidos_info_arma_platillo\">\r\n          <div class=\"contenido_item_instruction_arma_platillo first_menu_item_arma_platillo\">\r\n            <img src=\"../../../../assets/img/1exploraelmenu.png\" class=\"contenido_item_instruction_arma_platillo_imagen\">\r\n            <p class=\"centrado_texto contenido_item_instruccion_arma_platillo_main_text bold\">EXPLORA EL MENU</p>\r\n            <p class=\"contenido_item_instruccion_arma_platillo_sub_text text-color-gray2 centrado_texto\">Elige de entre la gran variedad de ingredientes con los que puedes conformar tu platillo</p>\r\n          </div>\r\n          <div class=\"contenido_item_instruction_arma_platillo\">\r\n            <img src=\"../../../../assets/img/2nosotroslopreparamos.png\" class=\"contenido_item_instruction_arma_platillo_imagen\">\r\n            <p class=\"centrado_texto contenido_item_instruccion_arma_platillo_main_text bold\">NOSOTROS LO PREPARAMOS</p>\r\n            <p class=\"contenido_item_instruccion_arma_platillo_sub_text text-color-gray2 centrado_texto\">Dieta conformada por nutriólogos y chefs adaptada a tus necesidades especificas de alimentación</p>\r\n          </div>\r\n          <div class=\"contenido_item_instruction_arma_platillo\">\r\n            <img src=\"../../../../assets/img/3recogelo.png\" class=\"contenido_item_instruction_arma_platillo_imagen\">\r\n            <P class=\"centrado_texto contenido_item_instruccion_arma_platillo_main_text bold\">RECOGELO Ó TE LO ENVIAMOS</P>\r\n            <p class=\"contenido_item_instruccion_arma_platillo_sub_text text-color-gray2 centrado_texto\">Puedes pasar a recoger tu platillo a una sucursal o te lo enviamos a domicilio</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Info final, Realiza tu platillo -->\r\n    <div class=\"contenedor_realiza_platillo\">\r\n      <img class=\"fondo_contenedor_realiza_platillo\" src=\"../../../../assets/img/fondo_realiza_tu_pedido.png\">\r\n      <div class=\"titulo_realiza_platillo_container\">\r\n        <div class=\"titulo_realiza_platillo_texto\">\r\n          <p style=\"transform: translate(-10px, 23px)\" class=\"text-color-gray5 estilo-sub-titulos \">REALIZA</p>\r\n          <p class=\"text-color-gray5 bold estilo-titulos \">PLATILLO</p>\r\n        </div>\r\n        <p class=\"titulo_realiza_platillo_borde_inf\">        \r\n      </div>\r\n      <div class=\"contenedor_interno_realiza_platillo\">\r\n        <div class=\"formulario_container_realiza_platillo\">\r\n          <p class=\"texto_principal_formulario_realiza_platillo text-color-gray5 bold first_item_form_realiza_platillo\">$ 65.00 MXN</p>\r\n          <p class=\"texto_principal_formulario_realiza_platillo text-color-gray5 bold\">ENSALADA DE LA CASA</p>\r\n          <p class=\"texto_secundario_formulario_realiza_platillo text-color-gray4\">Pan integral de centeno, huevo cocido, aguacate y semillas. Bañado de una vinagreta y aceite de oliva.</p>\r\n          <div class=\"contenedor_botones\">\r\n            <div class=\"boton_base boton_relleno bold\">ORDENAR</div>\r\n            <div class=\"boton_base bold boton_vacio\">VER EL MENÚ</div>\r\n          </div>\r\n        </div>\r\n        <img class=\"imagen_contenedor_realiza_platillo\" src=\"../../../../assets/img/plato_realiza_tu_platillo.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/origins/origins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top50{\r\n    margin-top: 150px;\r\n}\r\n\r\n.top30{\r\n    margin-top: 30px;\r\n}\r\n\r\n.grid{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n\r\n.img-container{\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n\r\n.img-container img{\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n\r\n.somos{\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row;\r\n            flex-flow: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.info-somos{\r\n    width: 55%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    height: 500px;\r\n}\r\n\r\n.img-somos{\r\n    width: 40%;\r\n}\r\n\r\n.img-somos img{\r\n    width: 100%;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.title{\r\n    color: #6f6f6f;\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    font-size: 2rem;\r\n}\r\n\r\n.sec{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n}\r\n.title2{\r\n    color: #6f6f6f;\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    font-size: 5rem;\r\n    \r\n}\r\n\r\n\r\n.line{\r\n    height: 2px;\r\n    width: 50%;\r\n    background-color: #6f6f6f;\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n}\r\n\r\n.add{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/origins/origins.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"grid\">\n  <!-- Seccion de header -->\n  <header class=\"header\">\n      <div class=\"img-container\">\n        <img  src=\"./assets/img/Headerfoto.png\" alt=\"header\">\n      </div>\n    </header>\n    <!-- Seccion de somos -->\n    <div class=\"somos \">\n      <div class=\"info-somos top50\">\n          <h2 class=\"title book\">quienes</h2>\n          <div class=\"sec\">\n            <h1 class=\"title2 bold\"> somos</h1>\n            <p class=\"line\"></p>\n          </div>\n          <div class=\"top30\">\n            <p class=\"medium\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. \n            </p>\n            <br>\n            <p class=\"medium\">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                Sint placeat nulla obcaecati corporis earum rem blanditiis minus voluptatum natus \n                quibusdam eaque dolorum molestiae, \n                beatae animi? Nostrum minima saepe id ab.\n                Sint placeat nulla obcaecati corporis earum rem blanditiis minus voluptatum natus \n                quibusdam eaque dolorum molestiae, \n                beatae animi? Nostrum minima saepe id ab.\n            </p>\n          </div>\n          \n    \n        </div>\n        <div class=\"img-somos top50\">\n          <img src=\"./assets/img/Quienessomosfoto.png\" alt=\"\">\n        </div>\n    </div>\n\n    <!-- Seccion adicional -->\n    <div class=\"add\">\n      <img src=\"./assets/img/Jitomatefondo.png\" alt=\"\">\n    </div>\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/origins/origins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OriginsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OriginsComponent = (function () {
    function OriginsComponent() {
    }
    OriginsComponent.prototype.ngOnInit = function () {
    };
    OriginsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-origins',
            template: __webpack_require__("../../../../../src/app/components/origins/origins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/origins/origins.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OriginsComponent);
    return OriginsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map