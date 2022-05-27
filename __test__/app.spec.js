import {resolvers} from '../src/Infraestructure/resolvers.js'
import * as useCaseBooks from '../src/Infraestructure/useCase/booksUseCase.js'


jest.mock('../src/Infraestructure/useCase/booksUseCase.js')

beforeEach(() => {
    jest.clearAllMocks();
})



describe("Resolver", () => {
    describe("Create a Book", () => {
      it("It should return a book", async () => {
        //Arrange
        const book = {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            pages: 1254,
            status: "lent"
        }
        
        useCaseBooks.createBook.mockResolvedValueOnce(book)
        

        //Act
        await resolvers.Mutation.createBook(null, {input: book});
  
        //Asserts
        expect(useCaseBooks.createBook).toHaveBeenCalledWith(book);
        expect(useCaseBooks.createBook).toHaveBeenCalledTimes(1);
  
      });
  
      
    });
  });
  

