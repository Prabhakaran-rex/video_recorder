class VideosController < ApplicationController
	def index
    @video = Video.find_by(id: params[:video_id])
	end

	def create
		@video = Video.new(file: params[:file])
    respond_to do |format|
    	if @video.save
    		# render json: {result: true}
        format.html {redirect_to home_index_path}
        format.js
      else
        format.html {redirect_to home_index_path}
        # render json: {result: false}
        format.js
      end
  	end
	end

	def show
	end
end
