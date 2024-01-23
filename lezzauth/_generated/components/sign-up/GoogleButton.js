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
exports.GoogleButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vector_icons_1 = require("@expo/vector-icons");
const components_1 = require("lezzauth/expo/hooks/components");
const react_native_1 = require("react-native");
const config_json_1 = __importDefault(require("../../../config.json"));
function GoogleButton(_a) {
    var { children, style } = _a, props = __rest(_a, ["children", "style"]);
    const { handleSignInGoogle } = (0, components_1.useSignIn)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, Object.assign({ onPress: handleSignInGoogle, style: Object.assign({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: config_json_1.default.theme.backgroundColor || '#FFFFFF', borderRadius: 8, borderColor: '#E0E0E0', borderWidth: 1, marginRight: 2, paddingVertical: 10, width: '100%' }, react_native_1.StyleSheet.flatten(style || {})) }, props, { children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { display: "flex", flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, gap: 10 }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.AntDesign, { name: 'google', size: 20, style: { color: config_json_1.default.theme.textBackgroundColor || "#000000" } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: config_json_1.default.theme.textBackgroundColor || "#000000" }, children: children || "Continue with Google" })] }) })));
}
exports.GoogleButton = GoogleButton;
