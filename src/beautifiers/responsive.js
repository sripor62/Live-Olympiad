export const responsiveStype = {
    default: {
        hide_mobile: { display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } },
        hide_desktop: { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } },
    },
    OnboardingLayout: {
        MainWarpper: { height: { lg: "100vh", xs: '80vh' } },
    },
    AuthLayout: {
        MaincWarpper: { height: { lg: "100vh", xs: '85vh' } },
    },
    CreatePassword: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbantist" }
        
    },
    ResetPassword: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbantist" }
    },
    ForgotPassword: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbantist" }
    },
    Signup: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbantist" }
    },
    Login: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbantist" }
    },
    Mobilever: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbanist" }
    },
    Personal: {
        Typo: { textAlign: { xs: 'center', lg: 'left' } , fontFamily: "urbantist"}
    },
    School: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "urbantist" }
    }
}