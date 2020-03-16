# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags

# app/controller/blog_posts_controller.rb

# 1) The name of our controller. It is where we will write all of our methods for our routes. Additionally it inherits authentication from the ApplicationController Controller. 
class BlogPostsController < ApplicationController
  def index
    # 2) The index method which goes to the GET request. This method will display all of our database entries. 
    @posts = BlogPost.all
  end

  def show
    # 3) the show method which uses the GET request as well. This method will display a single and specific database entry based on the params passed to it. 
    @post = BlogPost.find(params[:id])
  end

  # 4)Creates a new local object but does not attempt to save it to the databse. 
  def new
  end

  def create
    # 5)The create methos uses the POST request to create and save a new database entry. Since we are creating a new entry into our database, it must contain all the necessary inforation in each column which is why in BlogPost.create we pass the blog_post_params as an argument. This private method ensures that it is not accessed outside of this controller AND that the entry that is created meets the criteria for our database table, otherwise, the user will get an error. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) This else logic is saying that if the post is not successfully destroyed, the user will get rerouted to the post they were originally on. 
      redirect_to blog_post_path(@post)
    end
  end

  # 7) We create our private methods which let other developers know that these should not be changed in the future. Additionally, it allows for a level of security within our code since the methods written after cannot be accessed outside of this file. The private methods can only be accessed by other public methods within the same file. 
  private
  def blog_post_params
    # 8) This is basically saying that in order to create a new blogpost, the entry is going to need a title and content. 
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)A Rails Model is a Ruby class that can add database records (think of whole rows in an Excel table), find particular data you're looking for, update that data, or remove data. These common operations are referred to by the acronym CRUD--Create, Remove, Update, Destroy. Source: https://codecabulary.launchacademy.com/learn-rails/writing-a-rails-model

Our model BlogPost will contain our Blog data. 
class BlogPost < ApplicationRecord
  # 10)Links this to the Comment model. The Comment model will have a foreign key that will link that table to the different entries within the BlogPost model entries. 
  has_many :comments
end
