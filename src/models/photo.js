import uuidv4 from "uuid/v4";
import exif from "exif-js";
import moment from "moment";

class Photo {
  setFile(file) {
    this.name = file.name;
    this.path = `images/${file.name}`;
    this.compressedPath = `compressed_images/${file.name}`;
    this.uuid = uuidv4();
    this.uploadedAt = Date.now();
    const photo = this;
    exif.getData(file, function callback() {
      if (exif.getTag(this, "DateTime")) {
        const takenAt = exif.getTag(this, "DateTime");
        const momentDate = moment(takenAt, "YYYY:MM:DD HH:mm:ss");
        photo.takenAt = momentDate.valueOf();
      }
      if (exif.getTag(this, "Orientation")) {
        photo.orientation = exif.getTag(this, "Orientation");
      }
    });
  }

  fromObject(object) {
    this.name = object.name;
    this.path = object.path;
    this.compressedPath = object.compressedPath;
    this.uuid = object.uuid;
    this.uploadedAt = object.uploadedAt;
    this.takenAt = object.takenAt;
    this.orientation = object.orientation;
  }

  bestMoment() {
    if (this.takenAt) {
      return moment(this.takenAt).startOf("day");
    } else if (this.uploadedAt) {
      return moment(this.uploadedAt).startOf("day");
    }
    return moment().startOf("day");
  }

  bestDate() {
    if (this.takenAt) {
      return moment(this.takenAt)
        .startOf("day")
        .valueOf();
    } else if (this.uploadedAt) {
      return moment(this.uploadedAt)
        .startOf("day")
        .valueOf();
    }
    return 0;
  }
}

export default Photo;
