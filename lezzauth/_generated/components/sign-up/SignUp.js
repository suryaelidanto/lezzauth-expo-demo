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
exports.SignUpProvider = exports.SignUpContainer = exports.SignUp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vector_icons_1 = require("@expo/vector-icons");
const expo_1 = require("lezzauth/expo");
const constants_1 = require("lezzauth/expo/constants");
const components_1 = require("lezzauth/expo/hooks/components");
const libs_1 = require("lezzauth/libs");
const native_1 = require("@react-navigation/native");
const formik_1 = require("formik");
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const zod_formik_adapter_1 = require("zod-formik-adapter");
const config_json_1 = __importDefault(require("../../../config.json"));
const Button_1 = require("./Button");
const EmailInput_1 = require("./EmailInput");
const EmailLabel_1 = require("./EmailLabel");
const GoogleButton_1 = require("./GoogleButton");
const InputError_1 = require("./InputError");
const PasswordInput_1 = require("./PasswordInput");
const PasswordLabel_1 = require("./PasswordLabel");
exports.SignUp = React.memo(() => {
    const { isLoadingDone } = (0, components_1.useSignUp)();
    const { state } = (0, expo_1.useLezzAuthContext)();
    const { secureStore: { step, strategy } } = state;
    if (!isLoadingDone) {
        return (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { color: config_json_1.default.theme.color || "#FFFFFF" });
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, justifyContent: 'center' }, children: [!step && (0, jsx_runtime_1.jsx)(SignUpFormContainer, {}), step === "verify-email-address" && strategy === "EMAIL_LINK" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "EMAIL_LINK" }), step === "verify-email-address" && strategy === "EMAIL_CODE" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "EMAIL_CODE" }), step === "verify-phone-number" && strategy === "SMS_LINK" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "SMS_LINK" }), step === "verify-phone-number" && strategy === "SMS_CODE" && (0, jsx_runtime_1.jsx)(SignUpVerifyForm, { type: "SMS_CODE" })] }));
});
exports.SignUpContainer = React.memo(({ children }) => ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign up" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), children, (0, jsx_runtime_1.jsx)(SignUpRedirectText, {})] }), (0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) })] })));
exports.SignUpProvider = React.memo(({ children }) => {
    var _a, _b;
    const { handleSignUp } = (0, components_1.useSignUp)();
    const { state, dispatch } = (0, expo_1.useLezzAuthContext)();
    const __serverError = (_b = (_a = state === null || state === void 0 ? void 0 : state.signUpForm) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.__serverError;
    const { handleSubmit, isSubmitting, setFieldValue, touched, setFieldTouched, errors, values, setSubmitting } = (0, formik_1.useFormik)({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        },
        validate: (0, zod_formik_adapter_1.toFormikValidate)(libs_1.signUpSchema),
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            if (!values.email && !values.username) {
                setFieldError("email", "Email or username is required");
                setFieldError("username", "Email or username is required");
            }
            handleSignUp(values, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_UP_FORM",
            payload: {
                signUpForm: {
                    input: {
                        setFieldTouched,
                        setFieldValue,
                        values,
                        firstName: { error: errors.firstName, touched: touched.firstName },
                        lastName: { error: errors.lastName, touched: touched.lastName },
                        username: { error: errors.username, touched: touched.username },
                        email: { error: errors.email, touched: touched.email },
                        password: { error: errors.password, touched: touched.password }
                    },
                    button: { isSubmitting, handleSubmit },
                }
            }
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { display: "flex", justifyContent: "center", flex: 1 }, children: children }));
});
const SignUpFormContainer = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Sign up" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(OAuthButtons, {}), (0, jsx_runtime_1.jsx)(SignUpForm, {})] }), (0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) })] }));
});
const SignUpForm = React.memo(() => {
    var _a, _b;
    const { handleSignUp } = (0, components_1.useSignUp)();
    const { state, dispatch } = (0, expo_1.useLezzAuthContext)();
    const __serverError = (_b = (_a = state === null || state === void 0 ? void 0 : state.signUpForm) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.__serverError;
    const { handleSubmit, isSubmitting, setFieldValue, touched, setFieldTouched, errors, values, setSubmitting } = (0, formik_1.useFormik)({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        },
        validate: (0, zod_formik_adapter_1.toFormikValidate)(libs_1.signUpSchema),
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            if (!values.email && !values.username) {
                setFieldError("email", "Email or username is required");
                setFieldError("username", "Email or username is required");
            }
            handleSignUp(values, setSubmitting);
        },
    });
    React.useEffect(() => {
        dispatch({
            type: "SIGN_UP_FORM",
            payload: {
                signUpForm: {
                    input: {
                        setFieldTouched,
                        setFieldValue,
                        values,
                        firstName: { error: errors.firstName, touched: touched.firstName },
                        lastName: { error: errors.lastName, touched: touched.lastName },
                        username: { error: errors.username, touched: touched.username },
                        email: { error: errors.email, touched: touched.email },
                        password: { error: errors.password, touched: touched.password }
                    },
                    button: { isSubmitting, handleSubmit },
                }
            }
        });
    }, [values, touched, isSubmitting, errors]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginTop: 16 }, children: [(0, jsx_runtime_1.jsx)(EmailLabel_1.EmailLabel, {}), (0, jsx_runtime_1.jsx)(EmailInput_1.EmailInput, { autoFocus: true })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginTop: 16 }, children: [(0, jsx_runtime_1.jsx)(PasswordLabel_1.PasswordLabel, {}), (0, jsx_runtime_1.jsx)(PasswordInput_1.PasswordInput, {})] }), __serverError && (0, jsx_runtime_1.jsx)(InputError_1.InputError, { message: __serverError }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginTop: 16 }, children: (0, jsx_runtime_1.jsx)(Button_1.Button, {}) }), (0, jsx_runtime_1.jsx)(SignUpRedirectText, {})] }));
});
const SignUpVerifyTempEmailBadge = React.memo(({ tempEmail, handleResetSignInAttempt }) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: 'row', backgroundColor: '#FAFAFA', marginRight: 2, borderColor: 'white', borderWidth: 1, borderRadius: 20, alignItems: 'center', padding: 10 }, children: [(0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "account-circle", size: 20, color: config_json_1.default.theme.color, style: { width: 20, height: 20 } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: 'gray', marginLeft: 5 }, children: tempEmail }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: handleResetSignInAttempt, style: { marginLeft: 5, width: 20, height: 20 }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "edit", size: 20, color: config_json_1.default.theme.color }) })] })));
const SignUpVerifyForm = React.memo(({ type }) => {
    return ((0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsxs)(FormSection, { children: [(0, jsx_runtime_1.jsx)(HeaderText, { children: "Verify your email" }), (0, jsx_runtime_1.jsxs)(SubHeaderText, { children: ["to continue to ", config_json_1.default.name] }), (0, jsx_runtime_1.jsx)(SignUpVerifyContent, { type: type })] }), (0, jsx_runtime_1.jsx)(WatermarkSection, { children: (0, jsx_runtime_1.jsx)(Watermark, {}) })] }));
});
const SignUpVerifyContent = React.memo(({ type }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [type === "EMAIL_LINK" && (0, jsx_runtime_1.jsx)(EmailLinkContent, {}), type === "EMAIL_CODE" && (0, jsx_runtime_1.jsx)(EmailCodeContent, {}), type === "SMS_LINK" && (0, jsx_runtime_1.jsx)(SMSLinkContent, {}), type === "SMS_CODE" && (0, jsx_runtime_1.jsx)(SMSCodeContent, {})] })));
const EmailLinkContent = React.memo(() => {
    const [timer, setTimer] = React.useState(60);
    const [canResend, setCanResend] = React.useState(false);
    const { handleSignUpResendEmail } = (0, components_1.useSignUp)();
    const { state } = (0, expo_1.useLezzAuthContext)();
    const { handleResetSignInAttempt } = (0, components_1.useSignIn)();
    const { secureStore: { lezzauth_temp_email } } = state;
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!!timer)
                return setTimer((prev) => prev - 1);
            setCanResend(true);
            clearInterval(interval);
        }, 1000);
        return (() => clearInterval(interval));
    }, [timer]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { display: "flex", flexDirection: 'column', rowGap: 20 }, children: [(0, jsx_runtime_1.jsx)(SignUpVerifyTempEmailBadge, { tempEmail: lezzauth_temp_email, handleResetSignInAttempt: handleResetSignInAttempt }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14, fontWeight: 'bold' }, children: "Verification link" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14, fontWeight: 'normal' }, children: "Use the verification link sent to your email address" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { onPress: () => {
                    if (canResend) {
                        handleSignUpResendEmail('EMAIL_LINK');
                        setTimer(60);
                        setCanResend(false);
                    }
                }, style: { fontSize: 14, fontWeight: 'normal', color: canResend ? '#8465FF' : '#ccc', textDecorationLine: 'underline' }, children: ["Didn't receive a link? Resend ", !!timer && `(${timer}s)`] })] }));
});
const EmailCodeContent = React.memo(() => {
    const [timer, setTimer] = React.useState(60);
    const [canResend, setCanResend] = React.useState(false);
    const { handleSignUpResendEmail } = (0, components_1.useSignUp)();
    const { tempEmail, handleResetSignInAttempt } = (0, components_1.useSignIn)();
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!!timer)
                return setTimer((prev) => prev - 1);
            setCanResend(true);
            clearInterval(interval);
        }, 1000);
        return (() => clearInterval(interval));
    }, [timer]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { display: "flex", flexDirection: 'column', columnGap: 4 }, children: [(0, jsx_runtime_1.jsx)(SignUpVerifyTempEmailBadge, { tempEmail: tempEmail, handleResetSignInAttempt: handleResetSignInAttempt }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14, fontWeight: 'normal' }, children: "Verification coe" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14, fontWeight: 'normal' }, children: "Use the verification code sent to your email address" }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { onPress: () => {
                    if (canResend) {
                        handleSignUpResendEmail('EMAIL_CODE');
                        setTimer(60);
                        setCanResend(false);
                    }
                }, style: { fontSize: 14, fontWeight: '200', color: canResend ? '#8465FF' : '#ccc', textDecorationLine: 'underline' }, children: ["Didn't receive a code? Resend ", !!timer && `(${timer}s)`] })] }));
});
const SMSLinkContent = React.memo(() => ((0, jsx_runtime_1.jsx)(react_native_1.Text, { children: "SMS link verification" })));
const SMSCodeContent = React.memo(() => ((0, jsx_runtime_1.jsx)(react_native_1.Text, { children: "SMS code verification" })));
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
const SignUpRedirectText = React.memo(() => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { display: "flex", flexDirection: 'row', gap: 2, marginTop: 16, alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 12, color: '#888' }, children: "Have an account?" }), (0, jsx_runtime_1.jsx)(LinkText, { screen: constants_1.SIGN_IN_PAGE_NAME, children: "Sign in" })] })));
const OAuthButtons = React.memo(() => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: 'column', marginTop: 16 }, children: config_json_1.default.socialConnections.oauth_google.enabled ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(GoogleButton_1.GoogleButton, {}), (0, jsx_runtime_1.jsx)(OrDivider, {})] })) : null }));
});
const MainContainer = React.memo(({ children }) => {
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { margin: 16 }, children: children });
});
const OrDivider = React.memo(() => {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center', marginTop: 16 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#888' } }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: '#888', marginHorizontal: 10 }, children: "or" }), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#888' } })] }));
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
