import firebase from '../../firebase/firebase'
class UploadAdapter {
    constructor(loader) {
        this.loader = loader
    }
    upload() {
        return this.loader.file.then(
            (file) =>
                new Promise((resolve, reject) => {
                    // firebase reference
                    let uploadTask = firebase.storage().ref()
                        .child(`images/${file.name}`)
                        .put(file)

                    uploadTask.on(
                        firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot) => {
                            /* snapshot with info about 
                            the upload progress & metadata */
                        },
                        (error) => {
                            // error handling
                        },
                        () => {
                            // upload successful
                            uploadTask.snapshot.ref
                                .getDownloadURL()
                                .then((downloadURL) => {
                                    resolve({
                                        default: downloadURL
                                    })
                                })
                        }
                    )
                })
        )
    }
}

export default UploadAdapter