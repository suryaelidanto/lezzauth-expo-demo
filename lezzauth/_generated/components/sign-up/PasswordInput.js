"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.PasswordInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vector_icons_1 = require("@expo/vector-icons");
const expo_1 = require("lezzauth/expo");
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const InputError_1 = require("./InputError");
function PasswordInput(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var { onChangeText, id, style } = _a, props = __rest(_a, ["onChangeText", "id", "style"]);
    const { state } = (0, expo_1.useLezzAuthContext)();
    const [showPassword, setShowPassword] = React.useState(false);
    const error = (_d = (_c = (_b = state.signUpForm) === null || _b === void 0 ? void 0 : _b.input) === null || _c === void 0 ? void 0 : _c.password) === null || _d === void 0 ? void 0 : _d.error;
    const touched = (_g = (_f = (_e = state.signUpForm) === null || _e === void 0 ? void 0 : _e.input) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.touched;
    const setFieldValue = (_j = (_h = state.signUpForm) === null || _h === void 0 ? void 0 : _h.input) === null || _j === void 0 ? void 0 : _j.setFieldValue;
    const setFieldTouched = (_l = (_k = state.signUpForm) === null || _k === void 0 ? void 0 : _k.input) === null || _l === void 0 ? void 0 : _l.setFieldTouched;
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, Object.assign({ id: id || "password", textContentType: 'password', onKeyPress: () => { setFieldTouched && setFieldTouched("password", true); }, onChangeText: (val) => {
                            setFieldValue('password', val);
                            setFieldTouched('password', true, false);
                        }, secureTextEntry: !showPassword, style: Object.assign({ fontSize: 14, backgroundColor: 'white', borderColor: error && touched ? 'red' : 'gray', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: error && touched ? 2 : 0 }, react_native_1.StyleSheet.flatten(style || {})) }, props)), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: handleTogglePassword, style: {
                            position: 'absolute',
                            right: 10,
                            top: '50%',
                            transform: [{ translateY: -10 }],
                            zIndex: 1
                        }, children: showPassword ? ((0, jsx_runtime_1.jsx)(vector_icons_1.MaterialCommunityIcons, { name: "eye-off", size: 24, color: "#888" })) : ((0, jsx_runtime_1.jsx)(vector_icons_1.MaterialCommunityIcons, { name: "eye", size: 24, color: "#888" })) })] }), error && touched && (0, jsx_runtime_1.jsx)(InputError_1.InputError, { message: error })] }));
}
exports.PasswordInput = PasswordInput;
