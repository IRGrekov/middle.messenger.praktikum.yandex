// import template from './button.hbs';
import Block from '../../common/Block';
import '../../common/styles/styles.less';
import UserController from '../../controllers/UserController';



interface IAvatarProps {
  avatar: string;
}

interface IAvatar extends IAvatarProps {
  events: {
    change: Function;
  };
}
export class Avatar extends Block<IAvatar> {
  constructor() {
    super({
      events: {
        change: (e: any) => {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('avatar', file);
          UserController.changeAvatar(formData)
          console.log('0000', file);
          console.log('0000', file.name);
          // let hostResources = 'https://ya-praktikum.tech/api/v2/resources/'
          // let photoUrl = file.name
        }

      }

    })

  }
  // <img class="profile__avatar_img"  src=${hostResources + photoUrl} >
  //https://ya-praktikum.tech/api/v2/resources/91b2bcc6-a157-412f-9f94-9d643450092c/14408775 - be0f - 43c3 - 8ccc - 74e3a53b315b_1663106478_40 - kartinkin - net - p - irlandskii - lesnoi - kot - oboi - 46.jpg
  render() {
    const hostResources = 'https://ya-praktikum.tech/api/v2/resources/'
    const photoUrl = this.props.avatar
    return `
    <label class="profile__circle" for="file">
    <input class="profile__avatar_previewn" type="file" id="file" >
     <imgclass="profile__avatar_img" src=${hostResources + photoUrl}>
    <p class="profile__avatar_text">Поменять аватар</p>
    <svg class="profile__avatar" width="40" height="40" viewBox="0 0 40 40" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z"
        fill="#CDCDCD"></path>
    </svg>

  </label>
    `;
  }
}


