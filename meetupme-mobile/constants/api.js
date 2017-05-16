import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '58f76400a0e405177cc930a3';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {    
      const { data } = await axios.get(this.path);
      return data.meetups;
  }
}

export {
  MeetupApi
};