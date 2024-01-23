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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_1 = require("lezzauth/expo");
const react_native_1 = require("react-native");
const config_json_1 = __importDefault(require("../../../config.json"));
function Button(_a) {
    var _b, _c, _d, _e;
    var { children, onSubmit, style } = _a, props = __rest(_a, ["children", "onSubmit", "style"]);
    const { state } = (0, expo_1.useLezzAuthContext)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, Object.assign({ onPress: onSubmit ? onSubmit : () => { var _a, _b; return (_b = (_a = state.signInForm) === null || _a === void 0 ? void 0 : _a.button) === null || _b === void 0 ? void 0 : _b.handleSubmit(); }, disabled: (_c = (_b = state.signInForm) === null || _b === void 0 ? void 0 : _b.button) === null || _c === void 0 ? void 0 : _c.isSubmitting, style: Object.assign({ backgroundColor: config_json_1.default.theme.color || "#6C47FF", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 20 }, react_native_1.StyleSheet.flatten(style || {})) }, props, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: config_json_1.default.theme.textColor || "#FFFFFF", textAlign: 'center' }, children: ((_e = (_d = state.signInForm) === null || _d === void 0 ? void 0 : _d.button) === null || _e === void 0 ? void 0 : _e.isSubmitting) ? (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: config_json_1.default.theme.textColor || "#FFFFFF" }) : children || "CONTINUE" }) })));
}
exports.Button = Button;
