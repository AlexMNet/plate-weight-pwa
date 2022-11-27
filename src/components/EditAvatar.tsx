import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonProgressBar,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonAvatar,
  useIonToast,
} from '@ionic/react';
import { image, alertCircle } from 'ionicons/icons';

import React, { useState } from 'react';

import styled from 'styled-components';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../firebase-config';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase-config';

import { v4 as uuidv4 } from 'uuid';

import type { RootState } from '../redux/app/store';
import { updateUser } from '../redux/features/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditAvatar: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [present] = useIonToast();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFileOnChange = (e: any) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };

  const handleSave = () => {
    if (!selectedImage) return;
    if (selectedImage && user) {
      const imageRef = ref(storage, `images/${selectedImage.name + uuidv4()}`);
      const uploadTask = uploadBytesResumable(imageRef, selectedImage);

      uploadBytes(imageRef, selectedImage)
        .then((snapShot) => {
          getDownloadURL(snapShot.ref).then((url) => {
            const user = auth.currentUser;
            if (user) {
              updateProfile(user, { photoURL: url });
            }
            dispatch(updateUser({ photoURL: url }));
            history.push('/home/tab3');
          });
        })
        .catch((error) => {
          present({
            message: 'Som',
          });
        });

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          setUploadProgress(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          present({
            message: 'Something Went Wrong!',
            duration: 2000,
            position: 'top',
            color: 'danger',
            icon: alertCircle,
          });
        }
      );
    }
  };

  const deletePhoto = () => {
    const user = auth.currentUser;

    if (user && user.photoURL) {
      const profileImageRef = ref(storage, user.photoURL);
      deleteObject(profileImageRef)
        .then(() => {
          present({
            message: 'Successfully Deleted!',
            duration: 2000,
            position: 'top',
            color: 'dark',
            icon: image,
          });
        })
        .catch((error) => {
          present({
            message: 'Something Went Wrong!',
            duration: 2000,
            position: 'top',
            color: 'danger',
            icon: alertCircle,
          });
        });
      updateProfile(user, { photoURL: '' });
    }
    dispatch(updateUser({ photoURL: '' }));
  };

  return (
    <>
      <IonHeader collapse='fade'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Photo</IonTitle>
          {uploadProgress > 0 && (
            <IonProgressBar type='indeterminate' color='primary' />
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-align-items-center ion-text-center'>
            <IonAvatar style={{ height: '100px', width: '100px' }}>
              <img
                alt='User profile'
                src={
                  user.photoURL
                    ? user.photoURL
                    : 'https://ionicframework.com/docs/img/demos/avatar.svg'
                }
              />
            </IonAvatar>
          </IonRow>
          <IonRow className='ion-justify-content-center ion-margin-top ion-text-center'>
            <ButtonLabel>
              Add/Change
              <input
                type='file'
                id='avatar'
                name='avatar'
                accept='image/png, image/jpeg'
                style={{ display: 'none' }}
                onChange={(e) => handleFileOnChange(e)}
              />
            </ButtonLabel>
          </IonRow>
          {user.photoURL && (
            <IonRow className='ion-justify-content-center ion-margin-top ion-text-center'>
              <IonButton onClick={deletePhoto} fill='clear' color='danger'>
                Delete Photo
              </IonButton>
            </IonRow>
          )}
          {selectedImage && (
            <>
              <IonRow className='ion-justify-content-center ion-margin-top ion-text-center'>
                <IonAvatar style={{ height: '100px', width: '100px' }}>
                  <img
                    alt='User profile'
                    src={URL.createObjectURL(selectedImage)}
                  />
                </IonAvatar>
              </IonRow>
              <IonRow className='ion-justify-content-center ion-margin-top ion-text-center '>
                <IonButton onClick={handleSave} className='ion-margin-end'>
                  Save
                </IonButton>
                <ButtonLabel>
                  Try Again
                  <input
                    type='file'
                    id='avatar'
                    name='avatar'
                    accept='image/png, image/jpeg'
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileOnChange(e)}
                  />
                </ButtonLabel>
              </IonRow>
            </>
          )}
        </IonGrid>
      </IonContent>
    </>
  );
};

export default EditAvatar;

const ButtonLabel = styled.label`
  cursor: pointer;
  color: var(--ion-color-primary);
  margin-top: 16px;
`;
