require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:dessert) { Dessert.new('cake', 10) }
  let(:chef) { double("chef") }

  describe "#initialize" do
    it "sets a type" do
      expect(cake.type).to eq('cake')
    end

    it "sets a quantity" do
      expect(cake.quantity).to eq(10)
    end

    it "starts ingredients as an empty array" do 
      expect(cake.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do 
      expect { Dessert.new('cake', 10) }.to raise_error('Amount must be an number') 
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do 
      expect(dessert.add_ingredient).to_not include('sugar')
      dessert.add_ingredient('sugar')
      expect(dessert.add_ingredient).to include('sugar')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do 
      expects(cake.mix).shuffles(['sugar'])
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do 
      expect(cake.eat).to eq(8) 
    end

    it "raises an error if the amount is greater than the quantity" do 
      expects { dessert.eat(12)  }.to raise_error
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name"
      expect(cake.serve).to eq('Mister Chef')
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
  end
end
