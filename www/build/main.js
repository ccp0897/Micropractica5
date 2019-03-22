webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaDePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcerdaDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercaDePage = /** @class */ (function () {
    function AcercaDePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercaDePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercaDePage');
    };
    AcercaDePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acerda-de',template:/*ion-inline-start:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/acerca-de/acerca-de.html"*/'<!--\n  Generated template for the AcercaDePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Acerca De</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Agenda Electrónica</h2>\n  <p>Aplicación diseñada para la asignatura de DSI con el objetivo de mejorar con IONIC</p>\n  <br>\n  <h3>Cristian</h3>\n  <ion-item>\n    <ion-icon name="logo-github"></ion-icon>\n    <a href="">https://github.com/ccp0897/Micropractica4</a>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/acerca-de/acerca-de.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AcercaDePage);
    return AcercaDePage;
}());

//# sourceMappingURL=acerca-de.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibretaContactosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevo_contacto_nuevo_contacto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contact_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibretaContactosPage = /** @class */ (function () {
    function LibretaContactosPage(navCtrl, navParams, ContactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ContactService = ContactService;
        this.contacts = [];
    }
    LibretaContactosPage.prototype.ionViewWillEnter = function () {
        this.contacts = this.ContactService.getContacts();
    };
    LibretaContactosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibretaContactosPage');
    };
    LibretaContactosPage.prototype.onLoadContactosPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nuevo_contacto_nuevo_contacto__["a" /* NuevoContactoPage */]);
    };
    LibretaContactosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-libreta-contactos',template:/*ion-inline-start:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/libreta-contactos/libreta-contactos.html"*/'<!--\n  Generated template for the LibretaContactosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Lista de Contactos</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="onLoadContactosPage()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let contact of contacts">\n      <p><strong>Nombre: </strong> {{contact.nombre}}</p>\n      <p><strong>Organización: </strong> {{contact.organizacion}}</p>\n      <p><strong>Móvil: </strong>{{contact.movil}}</p>\n      <p><strong>Correo: </strong>{{contact.correo}}</p>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/libreta-contactos/libreta-contactos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_contact_service__["a" /* ContactService */]])
    ], LibretaContactosPage);
    return LibretaContactosPage;
}());

//# sourceMappingURL=libreta-contactos.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoContactoPage = /** @class */ (function () {
    function NuevoContactoPage(navCtrl, navParams, contactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactService = contactService;
    }
    NuevoContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoContactoPage');
    };
    NuevoContactoPage.prototype.onAddContact = function (value) {
        this.contactService.addContact(value);
        this.navCtrl.pop();
    };
    NuevoContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-contacto',template:/*ion-inline-start:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/nuevo-contacto/nuevo-contacto.html"*/'<!--\n  Generated template for the NuevoContactoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Nuevo Contacto</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="onAddContact(f.value)" #f="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>Nombre </ion-label>\n        <ion-input type="text" placeholder="Texto" name="nombre" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Organización </ion-label>\n          <ion-input type="text" placeholder="Texto" name="organizacion" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Número </ion-label>\n        <ion-input type="text" placeholder="666666666" name="movil" ngModel></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Correo </ion-label>\n          <ion-input type="text" placeholder="nombre@ejemplo.com" name="correo" ngModel></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n    <button ion-button block type="reset">Cancelar</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/nuevo-contacto/nuevo-contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]])
    ], NuevoContactoPage);
    return NuevoContactoPage;
}());

//# sourceMappingURL=nuevo-contacto.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acerca-de/acerca-de.module": [
		272,
		2
	],
	"../pages/libreta-contactos/libreta-contactos.module": [
		273,
		1
	],
	"../pages/nuevo-contacto/nuevo-contacto.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content></ion-content>\n'/*ion-inline-end:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_libreta_contactos_libreta_contactos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_acerca_de_acerca_de__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nuevo_contacto_nuevo_contacto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_contact_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*Incorporar la libreta de contactos, nuevo contacto y acerca de*/






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_libreta_contactos_libreta_contactos__["a" /* LibretaContactosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_acerca_de_acerca_de__["a" /* AcercaDePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_nuevo_contacto_nuevo_contacto__["a" /* NuevoContactoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acerca-de/acerca-de.module#AcercaDePageModule', name: 'AcercaDePage', segment: 'acerca-de', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/libreta-contactos/libreta-contactos.module#LibretaContactosPageModule', name: 'LibretaContactosPage', segment: 'libreta-contactos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-contacto/nuevo-contacto.module#NuevoContactoPageModule', name: 'NuevoContactoPage', segment: 'nuevo-contacto', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_libreta_contactos_libreta_contactos__["a" /* LibretaContactosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_acerca_de_acerca_de__["a" /* AcercaDePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_nuevo_contacto_nuevo_contacto__["a" /* NuevoContactoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_contact_service__["a" /* ContactService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_libreta_contactos_libreta_contactos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_acerca_de_acerca_de__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Libreta de Contactos', component: __WEBPACK_IMPORTED_MODULE_5__pages_libreta_contactos_libreta_contactos__["a" /* LibretaContactosPage */] },
            { title: 'Acerca De', component: __WEBPACK_IMPORTED_MODULE_6__pages_acerca_de_acerca_de__["a" /* AcercaDePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/cristian/Escritorio/Cristian/Universidad/Tercero/2ªCuatrimestre/DSI/IONIC/Micro_5/Agenda/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var ContactService = /** @class */ (function () {
    function ContactService() {
        this.contacts = [{ "nombre": "Alberto", "organizacion": "TESLA", "movil": "666666666", correo: "alberto@tesla.com" }];
    }
    ContactService.prototype.addContact = function (value) {
        this.contacts.push(value);
    };
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.updateContat = function (value) {
    };
    ContactService.prototype.removeContact = function (value) {
    };
    return ContactService;
}());

//# sourceMappingURL=contact.service.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map