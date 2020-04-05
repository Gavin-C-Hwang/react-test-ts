import React, { Component } from 'react';
import { PostContainer } from './containers';
import { Header } from './components';
//import { SHA256 } from './lib/sha256';
//import { aes256 } from './lib/aes256';
//import { JSEncrypt } from './lib/jsencrypt';
import crypto from 'crypto';

class App extends Component {
  render() {
    /*
    console.log('sha256', SHA256('adasd'));
    let encrypted = aes256.Encrypt('test aes256', 'passwordpassword');
    let decrypted = aes256.Decrypt(encrypted, 'passwordpassword');
    console.log('aes256 encrypted', encrypted);
    console.log('aes256 decrypted', decrypted);

    let crypt = new JSEncrypt();
    crypt.getKey();
    let publickey = crypt.getPublicKey();
    let privatekey = crypt.getPrivateKey();
    let plainText = '암호화 문자열';
    let encryptedText = crypt.encrypt(plainText);
    let decryptedText = crypt.decrypt(encryptedText);
    console.log('publickey', publickey);
    console.log('privatekey', privatekey);
    console.log('encryptedText', encryptedText);
    console.log('decryptedText', decryptedText);
    //=====================yarn add crypto-js========================================
    */

    //Hash알고리즘
    //salt 방식 해쉬를 10만번 반복. 키는 64자리
    crypto.randomBytes(64, (err, buf) => {
      crypto.pbkdf2('비밀번호', buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
      });
    });

    crypto.pbkdf2('입력비밀번호', '기존salt', 100000, 64, 'sha512', (err, key) => {
      console.log(key.toString('base64') === '기존 비밀번호');
    });

    // 대칭키
    const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
    let result = cipher.update('암호화할문장', 'utf8', 'base64'); // 'HbMtmFdroLU0arLpMflQ'
    result += cipher.final('base64'); // 'HbMtmFdroLU0arLpMflQYtt8xEf4lrPn5tX5k+a8Nzw='

    const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
    let result2 = decipher.update(result, 'base64', 'utf8'); // 암호화할문 (base64, utf8이 위의 cipher과 반대 순서입니다.)
    result2 += decipher.final('utf8'); // 암호화할문장 (여기도 base64대신 utf8)
    console.log(result2);

  
    return (
      <div>
        <Header />
        <PostContainer />
      </div>
    );
  }
}

export default App;
