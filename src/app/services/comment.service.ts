import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../shared/enviroment/enviroment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  createComment(formBody) {
    return this.http.post<Comment>(`${environment.api}/comment/create-comment/`, formBody );
  };

  createCommentReply(formBody) {
    return this.http.post<Comment>(`${environment.api}/comment/create-comment-reply/`, formBody );
  };

  getCommentsList(video_id: number, count: number) {
    return this.http.get<Comment>(`${environment.api}/comment/get-video-comments/`, {params: {video_id, count}});
  };

  deleteComment(id: number) {
    return this.http.post<Comment>(`${environment.api}/comment/delete-comment/`, {"id": `${id}`});
  };

  editComment(formBody) {
    return this.http.post<Comment>(`${environment.api}/comment/edit-comment/`, formBody );
  };

}
