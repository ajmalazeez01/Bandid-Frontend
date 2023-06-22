import Swal from 'sweetalert2'

function ConfirmSwal(api,id,changeUpdate) {
  return (
Swal.fire({
  title: 'Are you sure?',
  // text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
    api(id,changeUpdate).then((res)=>{
      if(res.data.success){     
      Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your action has been saved',
                showConfirmButton: false,
                timer: 1000
            })
          }
    })
  
  }
})
    
  )
}

export default ConfirmSwal