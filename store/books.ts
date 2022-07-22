import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators';
import { $axios } from '@/utils/nuxt-instance';
import { Book } from '@/models';

interface Show {
  id: Book['id']
}


@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {

  // States
  private books = [] as Book[]
  private book = {} as Book

  // Getters
  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  // Mutations
  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  // Actions
  @Action
  public async index() {
    const books = await $axios.$get('/books')
    this.context.commit('SET_ALL', books)
  }

  @Action
  public async show({ id }: Show) {
    const book = await $axios.$get(`/books/${id}`)
    this.context.commit('SET_SINGLE', book)
  }


  /**
   * PADRÕES DE NOMENCLATURA
   */

  /*
  @Action
  public async index() {}

  @Action
  public async create() {}
  
  @Action
  public async show() {}


  @Action
  public async update() {}
  
  @Action
  public async destroy() {}
  */
}
