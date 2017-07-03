class StaticPagesController < ApplicationController
  require 'rubygems'
  require 'gems'

  def root
    if !!params["term"]
      term = params["term"]
      response = Gems.search(term).first
      @response_name = response["name"]
      @response_info = response["info"]
      @response_url = response["project_uri"]
      @response_dependencies = response["dependencies"]["runtime"]
    end
  end

  def favorites
  end


end
