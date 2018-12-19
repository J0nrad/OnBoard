class Api::ProductsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    @product = current_user.product.new(product_params)

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
    @product = Product.find_by(id: params[:id])
      if @product.destroy
        render :show
      else
        render json: @product.errors.full_messages, status: 422
      end
  end

  def update
    @product = Product.find_by(id: params[:id])
    if @product.update_attributes(product_params)
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
