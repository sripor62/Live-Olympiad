export const responsiveStype = {
    default: {
        hide_mobile: { display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } },
        hide_desktop: { display: { xs: 'block', sm: 'block', md: 'nonr', lg: 'none' } },
    },
    OnboardingLayout: {
        MainWarpper: { height: { lg: "100vh", xs: '80vh' } },
    },
    AuthLayout: {
        MaincWarpper: { height: { lg: "100vh", xs: '85vh' } },
    },
    CreatePassword: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbantist" }
    },
    ResetPassword: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbantist" }
    },
    ForgotPassword: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbantist" }
    },
    Signup: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbantist" }
    },
    Login: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbantist" }
    },
    Mobilever: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbanist" }
    },
    Personal: {
        Typo: { textAlign: { xs: 'center', lg: 'left' } , fontFamily: "Urbantist"}
    },
    School: {
        Typo: { textAlign: { xs: 'center', lg: 'left' }, fontFamily: "Urbantist" }
    }
}