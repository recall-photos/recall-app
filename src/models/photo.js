import uuidv4 from 'uuid/v4';

class Photo {
  setFile(file) {
    this.path = `images/${file.name}`;
    this.uuid = uuidv4();
    this.uploaded_at = Date.now();
  }

  fromObject(object) {
    this.path = object.path;
    this.uuid = object.uuid;
    this.uploaded_at = object.uploaded_at;
  }
}

export default Photo;
