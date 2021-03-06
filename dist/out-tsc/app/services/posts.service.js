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
export var PostsService = (function () {
    function PostsService() {
    }
    PostsService.prototype.getPosts = function () {
        return [{
                profileImage: 'http://lorempixel.com/100/100/people/8/',
                createdBy: 'Malik Harrison',
                displayName: 'Harrmalik',
                createdAt: "34m ago",
                displayText: "This is sample text",
                replies: 1,
                reposts: 2,
                likes: 3
            }, {
                profileImage: 'http://lorempixel.com/100/100/people/7/',
                createdBy: 'Malik Harrison',
                displayName: 'Harrmalik',
                createdAt: "34m ago",
                displayText: "This is sample text",
                replies: 1,
                reposts: 2,
                likes: 3
            }, {
                profileImage: 'http://lorempixel.com/100/100/people/9/',
                createdBy: 'Malik Harrison',
                displayName: 'Harrmalik',
                createdAt: "34m ago",
                displayText: "This is sample text",
                replies: 1,
                reposts: 2,
                likes: 3
            }];
    };
    PostsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostsService);
    return PostsService;
}());
//# sourceMappingURL=../../../../src/app/services/posts.service.js.map