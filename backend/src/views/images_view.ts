import Image from "../models/Image";

export default {
	render(image: Image) {
		return {
			id: image.id,
			url: `${process.env.API_URL}:${process.env.PORT}/${process.env.DIR_IMAGE}/${image.path}`,
		};
	},

	renderMany(images: Image[]) {
		return images.map((image) => this.render(image));
	},
};
