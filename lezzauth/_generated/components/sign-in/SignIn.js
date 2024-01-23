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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInProvider = exports.SignInContainer = exports.SignIn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vector_icons_1 = require("@expo/vector-icons");
const expo_1 = require("lezzauth/expo");
const constants_1 = require("lezzauth/expo/constants");
const components_1 = require("lezzauth/expo/hooks/components");
const native_1 = require("@react-navigation/native");
const formik_1 = require("formik");
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const config_json_1 = __importDefault(require("../../../config.json"));
const Button_1 = require("./Button");
const EmailInput_1 = require("./EmailInput");
const EmailLabel_1 = require("./EmailLabel");
const GoogleButton_1 = require("./GoogleButton");
const PasswordInput_1 = require("./PasswordInput");
const PasswordLabel_1 = require("./PasswordLabel");
exports.SignIn = React.memo(() => {
    const { isLoadingDone } = (0, components_1.useSignIn)();
    const { state } = (0, expo_1.useLezzAuthContext)();
    if (!isLoadingDone) {
        return (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: config_json_1.default.theme.color || "#FFFFFF" });
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, justifyContent: 'center' }, children: [state.secureStore.step !== 'factor-one' && (0, jsx_runtime_1.jsx)(SignInFormContainer, {}), state.secureStore.step === 'factor-one' && (0, jsx_runtime_1.jsx)(SignInFirstFactorContainer, {})] }));
});
exports.SignInContainer = React.memo(({ children }) => ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign in" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), children, (0, jsx_runtime_1.jsx)(SignInRedirectText, {})] }), (0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) })] })));
exports.SignInProvider = React.memo(({ children }) => {
    const { handleSignIn } = (0, components_1.useSignIn)();
    const { dispatch } = (0, expo_1.useLezzAuthContext)();
    const { handleSubmit, setFieldValue, setFieldTouched, values, isSubmitting, touched, errors } = (0, formik_1.useFormik)({
        initialValues: {
            emailOrUsername: "",
            email: "",
            username: "",
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            handleSignIn(values, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_IN_FORM",
            payload: {
                signInForm: {
                    input: {
                        setFieldTouched,
                        setFieldValue,
                        values,
                    },
                    button: { isSubmitting, handleSubmit },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { display: "flex", justifyContent: "center", flex: 1 }, children: children }));
});
const SignInForm = React.memo(() => {
    const { handleSignIn } = (0, components_1.useSignIn)();
    const { dispatch } = (0, expo_1.useLezzAuthContext)();
    const { handleSubmit, setFieldValue, setFieldTouched, values, isSubmitting, touched, errors } = (0, formik_1.useFormik)({
        initialValues: {
            emailOrUsername: "",
            email: "",
            username: "",
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            handleSignIn(values, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_IN_FORM",
            payload: {
                signInForm: {
                    input: {
                        setFieldValue,
                        setFieldTouched,
                        values
                    },
                    button: { isSubmitting, handleSubmit },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginTop: 16 }, children: [(0, jsx_runtime_1.jsx)(EmailLabel_1.EmailLabel, {}), (0, jsx_runtime_1.jsx)(EmailInput_1.EmailInput, { autoFocus: true })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginTop: 16 }, children: (0, jsx_runtime_1.jsx)(Button_1.Button, {}) }), (0, jsx_runtime_1.jsx)(SignInRedirectText, {})] }));
});
const SignInFormContainer = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign in" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(OAuthButtons, {}), (0, jsx_runtime_1.jsx)(SignInForm, {})] }), (0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) })] }));
});
const FormSection = React.memo(({ children }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
            backgroundColor: config_json_1.default.theme.backgroundColor || '#FFFFFF',
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 20,
        }, children: children }));
});
const HeaderText = React.memo(({ children }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 20, fontWeight: 'bold', color: '#141414' }, children: children }));
});
const SubHeaderText = React.memo(({ children }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 16, color: '#888' }, children: children }));
});
const LinkText = React.memo(({ screen, children }) => ((0, jsx_runtime_1.jsx)(native_1.Link, { to: { screen: screen, params: {} }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontWeight: 'bold', color: config_json_1.default.theme.color || "#000000" }, children: children }) })));
const SignInRedirectText = React.memo(() => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { display: "flex", flexDirection: 'row', gap: 2, marginTop: 16, alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 12, color: '#888' }, children: "No account?" }), (0, jsx_runtime_1.jsx)(LinkText, { screen: constants_1.SIGN_UP_PAGE_NAME, children: "Sign up" })] })));
const OAuthButtons = React.memo(() => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: 'column', marginTop: 16 }, children: config_json_1.default.socialConnections.oauth_google.enabled ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(GoogleButton_1.GoogleButton, {}), (0, jsx_runtime_1.jsx)(OrDivider, {})] })) : null }));
});
const MainContainer = React.memo(({ children }) => {
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { margin: 16 }, children: children });
});
const OrDivider = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center', marginTop: 16 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#888' } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: '#888', marginHorizontal: 10 }, children: "or" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#888' } })] }));
});
const SignInFirstFactorForm = React.memo(() => {
    const { handleSignInFirstFactor, handleResetSignInAttempt, tempEmail, tempUserId } = (0, components_1.useSignIn)();
    const { dispatch } = (0, expo_1.useLezzAuthContext)();
    const { handleSubmit, setFieldValue, values, isSubmitting, setFieldTouched, touched, errors } = (0, formik_1.useFormik)({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            handleSignInFirstFactor(tempUserId, values.password, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_IN_FORM",
            payload: {
                signInForm: {
                    input: {
                        setFieldTouched,
                        setFieldValue,
                        values,
                    },
                    button: { isSubmitting, handleSubmit },
                },
            },
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginTop: 16 }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                    flexDirection: 'row',
                    backgroundColor: '#FAFAFA',
                    marginRight: 2,
                    borderColor: '#E0E0E0',
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 8,
                    justifyContent: 'space-between',
                }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: {
                            fontSize: 14,
                            fontWeight: '400',
                        }, children: tempEmail }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: () => handleResetSignInAttempt(), children: (0, jsx_runtime_1.jsx)(vector_icons_1.Feather, { name: "edit", size: 20, color: config_json_1.default.theme.color || '#6C47FF' }) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginTop: 16 }, children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, {}), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, { autoFocus: true })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginTop: 16 }, children: (0, jsx_runtime_1.jsx)(Button_1.Button, {}) }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginTop: 16 }, children: (0, jsx_runtime_1.jsx)(LinkText, { screen: '', children: "Get help" }) })] }));
});
const SignInFirstFactorContainer = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign in" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(SignInFirstFactorForm, {})] }), (0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) })] }));
});
const WatermarkSection = React.memo(({ children }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { top: 0, left: 30, zIndex: -10 }, children: children }));
});
const Watermark = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
            backgroundColor: config_json_1.default.theme.color || "#6C47FF",
            width: 135,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomStartRadius: 8,
            borderBottomEndRadius: 8,
            padding: 2,
            paddingVertical: 10,
        }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: config_json_1.default.theme.textColor || "#FFFFFF", fontSize: 12 }, children: "Secured by " }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: config_json_1.default.theme.textColor || "#FFFFFF", fontSize: 12, fontWeight: 'bold' }, children: "Lezzauth" })] }));
});
