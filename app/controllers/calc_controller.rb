class CalcController < ApplicationController
    def index
      # @posts = Post.all
      
      # @post = Post.find_by(params[:id])
      # @user = current_user
  
      # @comments = Comment.all
      # @comment = Comment.new
  
      if params[:search]
        @posts = Post.where('topic LIKE ?', "%#{params[:search]}%")
      else
        @user = current_user
        @posts = Post.all
      end
    end
      
    def show
      @user = current_user
      @comment = Comment.new
      @post = Post.find(params[:id])
    
    end
  
    def new
      @post = Post.new
  
      
  
      @user = current_user
    end
  
    def edit
      @post = Post.find(params[:id])
      # @user = User.find_by(params[:id])
      @user = current_user
    end
  
    def create
      @post = Post.new(post_params)
  
      @user = current_user
  
  
      if @post.save
        redirect_to :action => 'index'
      else
        render :action => 'new'
      end
  
    end
  
    def update
      @post = Post.find(params[:id])
    
      if @post.update_attributes(post_params)
         redirect_to :action => 'show', :id => @post
      else
         render :action => 'edit'
      end
    end
  
    def destroy
      Post.find(params[:id]).destroy
      redirect_to :action => 'index'
    end
    
    private
  
    def post_params
      params.require(:post).permit(:materials, :pickup_location, :start_time, :pounds, :user_id)
    end
  
  end
  