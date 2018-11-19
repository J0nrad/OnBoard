class Api::ProductsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @products = Product.all
    user = User.where(id: current_user.id)
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    @product = Product.new(product_params)
    @product.seller_id = current_user.id

    if @product.save
      render :show
    else
      render(
        json: ["Missing key information to sell this product"],
        status: 422
      )
    end
  end
  
  def destroy
    @product = current_user.products.find_by(id: params[:id])

      if @product.destroy
        render :show
      else
        render json: @product.errors.full_messages, status: 422
      end
  end

  private

  def product_params
    params.require(:product).permit(
      :lat,
      :lng,
      :title,
      :description,
      :category,
      :price,
      :photo
    )
  end

end
