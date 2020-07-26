const CAMPAIGN_FORM_SUBMITTED = "CAMPAIGN_FORM_SUBMITTED"

const campaignFormAction = (formValues) => {
    return (dispatch) => {
        dispatch({type:CAMPAIGN_FORM_SUBMITTED, payload:formValues})
    }
}

export default campaignFormAction