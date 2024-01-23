"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vector_icons_1 = require("@expo/vector-icons");
const expo_1 = require("lezzauth/expo");
const react_1 = require("react");
const react_native_1 = require("react-native");
const config_json_1 = __importDefault(require("../../../config.json"));
function UserButton() {
    var _a, _b;
    const { state } = (0, expo_1.useLezzAuthContext)();
    const { signOut } = (0, expo_1.useLezzAuth)();
    const [modal, setModal] = (0, react_1.useState)(false);
    const [userProfileModal, setUserProfileModal] = (0, react_1.useState)(false);
    const closeModal = () => {
        setModal(false);
    };
    const closeUserProfileModal = () => {
        setUserProfileModal(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: () => setModal(true), children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        overflow: 'hidden',
                    }, children: state.currentUser.profileImage ? ((0, jsx_runtime_1.jsx)(react_native_1.Image, { style: { width: 30, height: 30 }, source: { uri: state.currentUser.profileImage } })) : ((0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "account-circle", size: 30, style: { width: '100%', height: '100%' }, color: config_json_1.default.theme.color })) }) }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { animationType: "fade", transparent: true, visible: modal, onRequestClose: () => setModal(false), children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableWithoutFeedback, { onPress: closeModal, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1 }, children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableWithoutFeedback, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: 'row', position: 'absolute', top: 40, right: 20, alignItems: 'flex-start' }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                                        backgroundColor: 'white',
                                        padding: 20,
                                        minWidth: 300,
                                        borderRadius: 16,
                                        elevation: 5,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 1,
                                        shadowRadius: 10,
                                    }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { borderRadius: 45, width: 45, height: 45, display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { borderRadius: 45, width: 45, height: 45 }, children: state.currentUser.profileImage ? ((0, jsx_runtime_1.jsx)(react_native_1.Image, { source: { uri: state.currentUser.profileImage }, style: { width: '100%', height: '100%', borderRadius: 45 } })) : ((0, jsx_runtime_1.jsx)(vector_icons_1.MaterialIcons, { name: "account-circle", size: 45, style: { width: '100%', height: '100%' }, color: config_json_1.default.theme.color })) }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { marginLeft: 10, flex: 6 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontWeight: 'bold', fontSize: 14 }, children: (state.currentUser.firstName || state.currentUser.lastName)
                                                                ? `${(_a = state.currentUser.firstName) !== null && _a !== void 0 ? _a : ''} ${(_b = state.currentUser.lastName) !== null && _b !== void 0 ? _b : ''}`
                                                                : '' }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { color: "rgb(156 163 175)" }, children: state.currentUser.email })] })] }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }, onPress: () => {
                                                setModal(false);
                                                setUserProfileModal(true);
                                            }, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.FontAwesome, { name: "gear", size: 20, color: "rgb(156 163 175)", style: { flex: 1 } }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { marginLeft: 10, fontSize: 14, fontWeight: "400", color: "rgb(156 163 175)", flex: 6 }, children: "Manage account" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.TouchableOpacity, { style: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }, onPress: signOut, children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: { display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }, children: (0, jsx_runtime_1.jsx)(vector_icons_1.Feather, { name: "log-out", size: 20, color: "rgb(156 163 175)", style: { flex: 1 } }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { marginLeft: 10, fontSize: 14, fontWeight: "400", color: "rgb(156 163 175)", flex: 6 }, children: "Sign out" })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flexDirection: 'row', marginTop: 20 }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14, color: "rgb(156 163 175)" }, children: "Secured by " }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: { fontSize: 14, color: "rgb(156 163 175)", fontWeight: 'bold' }, children: "Lezzauth" })] })] }) }) }) }) }) }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { animationType: "fade", transparent: true, visible: userProfileModal, onRequestClose: () => setUserProfileModal(false), children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableWithoutFeedback, { onPress: closeUserProfileModal, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }, children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableWithoutFeedback, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flexDirection: 'row', position: 'absolute', top: 40, right: 20, alignItems: 'flex-start' }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                        backgroundColor: 'white',
                                        padding: 20,
                                        minWidth: 300,
                                        borderRadius: 16,
                                        elevation: 5,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                                        shadowOffset: { width: 0, height: 0 },
                                        shadowOpacity: 1,
                                        shadowRadius: 10,
                                    }, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: "User profile" }) }) }) }) }) }) })] }));
}
exports.UserButton = UserButton;
