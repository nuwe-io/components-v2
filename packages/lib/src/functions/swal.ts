import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const moduleSwal = {
  Swal: Swal,
  withReactContent: withReactContent
}

export const MySwal = moduleSwal.withReactContent(moduleSwal.Swal)

/**
 * @FuntionName errorSwal
 * @useInButtons for button actions -> () => errorSwal() or errorSwal(config)
 * @useLikeModal for modal actions -> errorSwal(config)
 * @param {object} config
 * @errorSwalDefaultValues use the default values and modify the required field
 * @Description show only errors
 * @props {object} use spread operatior to pass custom values
 */
export const errorSwalDefaultValues = {
  title: 'Error',
  text: 'oops an error occurred',
  background: '#1E212E',
  color: '#fff',
  icon: 'error'
}
export const errorSwal = (
  config = {
    ...errorSwalDefaultValues
  } as any,
  ...props: any
) => {
  MySwal.fire({
    ...config,
    ...props
  })
}

export const socketErrorSwal = (config: any, action: any) => {
  MySwal.fire({
    ...config,
    background: '#1E212E',
    color: '#fff',
    icon: 'error'
  }).then((result) => {
    if (result.isConfirmed || result.dismiss === Swal.DismissReason.cancel) {
      action({ error: false, message: '' })
    }
  })
}

/**
 * @FuntionName successSwal
 * @useInButtons for button actions -> () => successSwal() or successSwal(config)
 * @useLikeModal for modal actions -> successSwal(config)
 * @param {object} config
 * @successSwalDefaultValues use the default values and modify the required field
 * @Description show only success operations
 * @props {object} use spread operatior to pass custom values
 */
export const successSwalDefaultValues = {
  title: 'Success',
  text: 'operacion exitosa successful operation',
  background: '#1E212E',
  color: '#fff',
  icon: 'success'
}
export const successSwal = (
  config = {
    ...successSwalDefaultValues
  },
  ...props: any
) => {
  MySwal.fire({
    ...config,
    ...props
  })
}

/**
 * @FuntionName actionsSwal
 * @useInButtons for button actions -> () => actionsSwal() or actionsSwal(config)
 * @useLikeModal for modal actions -> actionsSwal(config)
 * @param {object} config
 * @actionsSwalSwalDefaultValues use the default values and modify the required field
 * @actionsSwalDefault actions for default. cant be modified
 * @Description for operations that can be done in both success and error
 * @props {object} use spread operatior to pass custom values
 */
export const actionsSwalDefaultValues = {
  title: 'Are you sure ?',
  text: 'You wont be able to revert this!',
  background: '#1E212E',
  color: '#fff',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
  didOpen: () => {
    // code
  }
}
export const actionsSwalDefault = {
  actionConfirm: () => {
    Swal.fire({
      title: 'Deleted!',
      text: 'Your file has been deleted.',
      icon: 'success',
      background: '#1E212E',
      color: '#fff'
    })
  },
  cancelActionConfirm: () => {
    Swal.fire({
      title: 'Cancelled',
      text: 'Your imaginary file is safe :)',
      icon: 'error',
      background: '#1E212E',
      color: '#fff'
    })
  }
}

export const actionsSwal = (
  config = {
    ...actionsSwalDefaultValues
  } as any,
  actions = {
    ...actionsSwalDefault
  } as any,
  ...props: any
) => {
  MySwal.fire({
    ...config,
    ...props
  }).then((result) => {
    if (result.value) {
      actions.actionConfirm()
    }
    if (!result.value) {
      actions.cancelActionConfirm()
    }
  })
}

/**
 * @FuntionName asyncSwal
 * @useInButtons for button actions -> () => asyncSwal() or asyncSwal(config)
 * @useLikeModal for modal actions -> asyncSwal(config)
 * @param {object} config
 * @asyncSwalSwalDefaultValues use the default values and modify the required field
 * @Description for operations that can be done in both success and error
 * @props {object} use spread operatior to pass custom values
 * @preconfirm in this field within the default parameters receive the asynchronous code
 * @param {object} response receive a property called: responseAction -> function in charge of the successful response code
 */
export const asyncSwalDefaultValues = {
  title: 'Submit your Github username',
  input: 'text',
  inputValue: 'nuwe-io',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showLoaderOnConfirm: true,
  confirmButtonText: 'Look up',
  confirmButtonColor: '#3085d6',
  showCancelButton: true,
  cancelButtonColor: '#d33',
  cancelButtonText: 'cancel',
  background: '#1E212E',
  color: '#fff',
  preConfirm: (value: any) => {
    // asyncronous code
    return fetch(`//api.github.com/users/${value}`, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch((error) => {
        Swal.showValidationMessage(`Request failed: ${error}`)
      })
  },
  backdrop: true,
  allowOutsideClick: () => !Swal.isLoading()
}
export const asyncResponseSuccess = {
  responseAction: (res: any) => {
    Swal.fire({
      title: `${res.value.login}'s avatar`,
      text: `Name: ${res.value.name}`,
      imageUrl: res.value.avatar_url,
      background: '#1E212E',
      color: '#fff'
    })
  }
}
export const asyncSwal = (
  config = {
    ...asyncSwalDefaultValues
  },
  response = {
    ...asyncResponseSuccess
  },
  ...props: any
) => {
  MySwal.fire({
    ...config,
    ...props
  }).then((result) => {
    if (result.value) {
      response.responseAction(result)
    }
  })
}
