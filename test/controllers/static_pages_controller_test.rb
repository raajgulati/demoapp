require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get epfo_members" do
    get :epfo_members
    assert_response :success
  end

  test "should get retiring_employees" do
    get :retiring_employees
    assert_response :success
  end

  test "should get retired_employees" do
    get :retired_employees
    assert_response :success
  end

  test "should get family_pensioners" do
    get :family_pensioners
    assert_response :success
  end

  test "should get news_articles" do
    get :news_articles
    assert_response :success
  end

  test "should get tips_tools" do
    get :tips_tools
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
