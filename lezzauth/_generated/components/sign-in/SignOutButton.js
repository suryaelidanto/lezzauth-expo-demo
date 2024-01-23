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
exports.SignOutButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_1 = require("lezzauth/expo");
const react_native_1 = require("react-native");
const config_json_1 = __importDefault(require("../../../config.json"));
function SignOutButton(_a) {
    var { children, style } = _a, props = __rest(_a, ["children", "style"]);
    const { signOut } = (0, expo_1.useLezzAuth)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, Object.assign({}, props, { onPress: signOut, style: Object.assign({ backgroundColor: config_json_1.default.theme.color || "#6C47FF", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 20 }, react_native_1.StyleSheet.flatten(style || {})), children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: config_json_1.default.theme.textColor || "#FFFFFF", textAlign: 'center' }, children: children || 'SIGN OUT' }) })));
}
exports.SignOutButton = SignOutButton;
