class OffersController < ApplicationController
	def new
	end

	def index
		@offers = Offer.all
	end

	def create
		@offer = Offer.new(offer_params)

		if @offer.save
			flash[:notice] = "Success! Your offer has been posted."
			redirect_to @offer
		else
			flash[:error] = "Failed to post offer. Correct any errors in your form and try again."
			render :new
		end
	end

	def show
		@offer = Offer.find(params[:id])
	end

	private
		def offer_params
			params.require(:offer).permit(:user,:image,
					:line1,:line2,:city,:state,:zip,:rent,:start_date,
					:end_date,:water,:electric,:gas,:heat,:internet,:washdry,
					:aircond,:handicap,:parking)
		end
end