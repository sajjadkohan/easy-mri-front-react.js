export const mriValidate = data => {
    let errors = {};

    // regex

    var regex = /\s\w{2}\s/

    let justNumber = /\D/;

    let studyValidation = /^[A-Z]{4}\/[A-Z]{2}$/g;

    let typeValidation = /^\S{1,5}[A-Za-z0-9ا-ی ]{3,100}$/g;

    let dateValidation = /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/g;


    let empty = /\s+/;

    // if(empty.test(data.userID)){
    //     errors.userID = "فاصله قابل قبول نیست";
    // }


    if(justNumber.test(data.userID)) {
        errors.userID = "فقط اعداد را وارد کنید";
    } else{
        delete errors.userID
    }

    if(!studyValidation.test(data.Study)) {
        errors.Study = "مثال : ABCD/EF چهار حرف بزرگ برای شروع و بعد (/) و بعد دو حرف بزرگ"
        //"شما مجاز به وارد کردن حروف بزرگ و کاراکتر (/) هستید"
    } else {
        delete errors.Study
    }

    if (!typeValidation.test(data.type)) {
        errors.type = "بیش از 2 حرف را وارد کنید"
    } else {
        delete errors.type
    }

    if(!dateValidation.test(data.dateSave)) {
        errors.dateSave = "تاریخ را به صورت صحیح از (2 رقم) روز / (2 رقم) ماه / (4 رقم)سال وارد کنید"
    } else {
        delete errors.dateSave;
    }
    //  if (empty.test(data.userID)) {
    //     errors.userID = "فاصله مجاز نیست";
    // }

    // if(!data.userID.trim()){
    //     errors.userID = "لطفا یوزر ایدی را وارد کنید";
    // } else if(!data.userID.length){
    //     errors.userID = "لطفا یوزر ایدی را وارد کنید";
    // }
    

    // if(data.Study.length <= 3) {
    //     errors.Study = "لطفا مقدار را وارد کنید"
    // }else {
    //     delete errors.Study
    // }

    

    // if(data.type.length <= 3) {
    //     errors.type = "لطفا مقدار را وارد کنید"
    // }else {
    //     delete errors.type
    // }

    // if(!data.dateSave.length) {
    //     errors.dateSave = "لطفا مقدار را وارد کنید"
    // }else {
    //     delete errors.dateSave
    // }

    return errors;

}