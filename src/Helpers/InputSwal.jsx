import Swal from 'sweetalert2'


const InputSwal = (title,inputType,inputValue,buttonName,apiCall,id,resMessage) => {
  return (
         Swal.fire({
        title: title,
        input: inputType,
        inputValue: inputValue,
        inputAttributes: {
          autocapitalize: "off",
          // maxLength: 6 // specify the max length of OTP here
        },
        showCancelButton: true,
        confirmButtonText: buttonName,
        showLoaderOnConfirm: true,
        preConfirm: (data) => {
          const formData={
            name:data,
            id:id
          }
          console.log(formData);
          return apiCall(formData)
            .then((response) => {
              if (response.data.success) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: resMessage,
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            .catch((error) => {
              Swal.showValidationMessage(`failed`);
            });
        },
      })
  )
}

export default InputSwal