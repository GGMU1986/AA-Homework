class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @seq = []
    @sequence_length = 1
    @game_over = false
  end

  def play
    until game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    add_random_color
    show_sequence
    if require_sequence
      add_random_color
      round_success_message
    else
      game_over = false
    end
  end

  def show_sequence
    puts seq.join(" ")
  end

  def require_sequence
    puts "Please choose a color: "
    guess = gets.chomp
  end

  def add_random_color
    seq << COLORS.map { |col| col[0].upcase }.sample
  end

  def round_success_message
    puts "Nice job! Keep going champ!"
  end

  def game_over_message
    puts "You've disgraced your family. BE GONE!"
  end

  def reset_game
    @game_over = false
    seq = []
    sequence_length = 1
  end
end
