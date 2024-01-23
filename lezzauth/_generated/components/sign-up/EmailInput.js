"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_1 = require("lezzauth/expo");
const react_native_1 = require("react-native");
const InputError_1 = require("./InputError");
function EmailInput(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var { onChangeText, id, style } = _a, props = __rest(_a, ["onChangeText", "id", "style"]);
    const { state } = (0, expo_1.useLezzAuthContext)();
    const error = (_d = (_c = (_b = state.signUpForm) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.email) === null || _d === void 0 ? void 0 : _d.error;
    const touched = (_g = (_f = (_e = state.signUpForm) === null || _e === void 0 ? void 0 : _e.input) === null || _f === void 0 ? void 0 : _f.email) === null || _g === void 0 ? void 0 : _g.touched;
    const setFieldValue = (_j = (_h = state.signUpForm) === null || _h === void 0 ? void 0 : _h.input) === null || _j === void 0 ? void 0 : _j.setFieldValue;
    const setFieldTouched = (_l = (_k = state.signUpForm) === null || _k === void 0 ? void 0 : _k.input) === null || _l === void 0 ? void 0 : _l.setFieldTouched;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, Object.assign({ id: id || "email", textContentType: 'emailAddress', onKeyPress: () => { setFieldTouched && setFieldTouched("email", true); }, onChangeText: (val) => {
                    setFieldValue('email', val);
                    setFieldTouched('email', true, false);
                }, style: Object.assign({ fontSize: 14, backgroundColor: 'white', borderColor: error && touched ? 'red' : 'gray', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: error && touched ? 2 : 0 }, react_native_1.StyleSheet.flatten(style || {})) }, props)), error && touched && (0, jsx_runtime_1.jsx)(InputError_1.InputError, { message: error })] }));
}
exports.EmailInput = EmailInput;
