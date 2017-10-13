class Embed::VideosController < ApplicationController
  before_action :allow_iframe_requests
	def index
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

  private
  def allow_iframe_requests
    response.headers.delete('X-Frame-Options')
  end
end
