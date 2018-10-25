import uuidv4 from 'uuid/v4';

class Photo {
  setFile(file) {
    this.path = `images/${file.name}`;
    this.uuid = uuidv4();
    this.uploadedAt = Date.now();
  }

  fromObject(object) {
    this.path = object.path;
    this.uuid = object.uuid;
    this.uploadedAt = object.uploaded_at;
  }
}

export default Photo;
