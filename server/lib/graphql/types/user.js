'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    extend type Mutation {\n        authenticate(user: UserInput!): UserToken\n    }\n\n    extend type Query {\n        getUser: User,\n        getUsers: [User]\n    }\n\n    type User {\n        userId: ID\n        userName: String\n        contact: Contact\n        gender: Gender\n        locale: Locale\n        school: School\n        avatar: String\n    }\n\n    type UserToken {\n        token: String\n    }\n\n    type Contact {\n        wechat: String\n        qq: String\n        email: String\n        phone: String\n    }\n\n    type Point {\n        lat: Float\n        lon: Float\n    }\n\n    type School {\n        schoolId: String\n        schoolName: String\n        schoolCity: String\n        schoolState: String\n        location: Point\n    }\n\n    type Locale {\n        city: String\n        state: String\n        country: String\n    }\n\n    enum Gender {\n        Male\n        Female\n    }\n\n    input SchoolInput {\n        schoolId: String\n        schoolName: String\n    }\n\n    input LocaleInput {\n        city: String\n        state: String\n        country: String\n    }\n\n    input ContactInput {\n        qq: String\n        email: String\n        phone: String\n        wechat: String\n    }\n\n    input UserInput {\n        userName: String # WeChat nickName\n        openId: ID # WeChat openId\n        unionId: ID # WeChat unionId\n        code: ID # WeChat login Code\n        gender: Gender\n        locale: LocaleInput\n        school: SchoolInput\n        avatar: String\n        contact: ContactInput\n    }\n\n\n'], ['\n    extend type Mutation {\n        authenticate(user: UserInput!): UserToken\n    }\n\n    extend type Query {\n        getUser: User,\n        getUsers: [User]\n    }\n\n    type User {\n        userId: ID\n        userName: String\n        contact: Contact\n        gender: Gender\n        locale: Locale\n        school: School\n        avatar: String\n    }\n\n    type UserToken {\n        token: String\n    }\n\n    type Contact {\n        wechat: String\n        qq: String\n        email: String\n        phone: String\n    }\n\n    type Point {\n        lat: Float\n        lon: Float\n    }\n\n    type School {\n        schoolId: String\n        schoolName: String\n        schoolCity: String\n        schoolState: String\n        location: Point\n    }\n\n    type Locale {\n        city: String\n        state: String\n        country: String\n    }\n\n    enum Gender {\n        Male\n        Female\n    }\n\n    input SchoolInput {\n        schoolId: String\n        schoolName: String\n    }\n\n    input LocaleInput {\n        city: String\n        state: String\n        country: String\n    }\n\n    input ContactInput {\n        qq: String\n        email: String\n        phone: String\n        wechat: String\n    }\n\n    input UserInput {\n        userName: String # WeChat nickName\n        openId: ID # WeChat openId\n        unionId: ID # WeChat unionId\n        code: ID # WeChat login Code\n        gender: Gender\n        locale: LocaleInput\n        school: SchoolInput\n        avatar: String\n        contact: ContactInput\n    }\n\n\n']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _graphqlTag2.default)(_templateObject);

exports.default = typeDefs;