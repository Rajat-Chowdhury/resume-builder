
const initialState = {
    details: {
      formValues: [
        {
            id: 0,
            value: '',
            config: {
                type: 'text', 
                placeholder: 'First Name',
                label: 'First Name *'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },
        {
            id: 1,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Last Name',
                label: 'Last Name *'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 2,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'City',
                label : 'City *'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 3,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'State',
                label : 'State *'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 4,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Pincode',
                label: 'Pincode *'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 5,
            inputType: 'input',
            value: '',
            config: {
                type: 'email', 
                placeholder: 'Enter your mail ',
                label : 'Email ID *'
            },
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched : false
        },            
        {
            id: 6,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your phone number *',
                label : 'Phone Number *'
            },
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched : false
        },
        {
            id: 7,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your github link',
                label : 'GitHub'
            },
            validation: {
            },
            valid: true,
            touched : false
        },
        {
            id: 8,
            inputType: 'input',
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your linkedin link',
                label : 'LinkedIn'
            },
            validation: {
            },
            valid: true,
            touched : false
        },
        {
            id: 9,
            inputType: "textarea",
            value: '',
            config: {
                type: 'text', 
                placeholder: 'Enter your statement',
                label : 'About you *'
            },
            validation: {
                required: true
            },
            valid: false,
            touched : false
        }
    ],
    eduDetails: [],
    expDetails: [],
    skills: [],
    achivs: [],
    proDetails: [],
    trainDetails: [],
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/resume-builder-d8c46.appspot.com/o/images%2FSample-1---right.jpg?alt=media&token=fea84def-1533-4fec-97b5-d94fc1219a10",
    formIsValid: false,
      }
}

const updateDetails = (state, action) => {
    const updatedState = {
        ...state,
        details: action.userDetails
    }

    return updatedState
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'UPDATE_DETAILS': return updateDetails(state, action);

        default:
            return state;
    }
};

export default reducer;